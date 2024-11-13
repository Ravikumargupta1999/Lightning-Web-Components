import { LightningElement, api } from 'lwc'
import { NavigationMixin } from 'lightning/navigation'
import getFiles from '@salesforce/apex/FileController.getFiles'
import updateFiles from '@salesforce/apex/FileController.updateFiles'
import { notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class FileUploader extends NavigationMixin(LightningElement) {
   @api recordId
   @api objectApiName
   selectedOptions = []
   value 
   filesToUpdate = []
   filesOptions = [
        { label: 'PDF', value: '.pdf' },
        { label: 'JPEG', value: '.jpeg' },
        { label: 'PNG', value: '.png' },
        { label: 'DOCS', value: '.docs' }
    ]

    handleFilesOptions(event){
        console.log('Selected option :',event.target.value)
        this.selectedOptions = []
        this.value = event.target.value
        this.selectedOptions.push(event.target.value)
        console.log('Select Kiya Hai : ',JSON.stringify(this.selectedOptions))
    }

    get acceptedFormats() {
        console.log('Selected Options : ',JSON.stringify(this.selectedOptions))
        return this.selectedOptions.length ? this.selectedOptions : null;
    }

    async handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
        console.log(uploadedFiles)
       
        let ids = [];
        for(let i =0;i< uploadedFiles.length ;i++){
            ids.push(uploadedFiles[i].contentBodyId)
        }
        console.log('Ids : ',JSON.stringify(ids))
        await getFiles({li: ids})
          .then( data =>{
              console.log('Data : ',data)
              this.filesToUpdate = [...data]
              console.log('Hello')
          })
          .catch(error =>{
             console.error('Error : ',error)
          })
        console.log('Files to Update : ',JSON.stringify(this.filesToUpdate));
        this.filesToUpdate = this.filesToUpdate.map(record => {
            return {...record,Title : this.value +' ' +record.Title}
        })
        console.log('New Files to Update : ',JSON.stringify(this.filesToUpdate))
        console.log('update Fields : ',JSON.stringify(this.filesToUpdate))
        // Prepare the recordId's for notifyRecordUpdateAvailable
        const notifyChangeIds = this.filesToUpdate.map(row=>{return {"recordId": row.Id}});
        console.log('notifyChangeIds : ',JSON.stringify(notifyChangeIds))
 
        try{
            // Pass edited fields to the updateContacts Apex Controller
            const result = await updateFiles({data: this.filesToUpdate});
            // console.log(result);
            console.log(JSON.stringify("Apex update result: " + result));
          

            // Refresh LDS cache and wires
            notifyRecordUpdateAvailable(notifyChangeIds);
 
            // Display fresh data in the datatable
            await refreshApex(this.filesToUpdate);
            
        }catch(error){
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error updating or refreshing records',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        }
    }

    handleSubmit(){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Files Updated Successfully',
                variant: 'success'
            })
        );
        this.closeTab()
    }

    closeTab(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}

