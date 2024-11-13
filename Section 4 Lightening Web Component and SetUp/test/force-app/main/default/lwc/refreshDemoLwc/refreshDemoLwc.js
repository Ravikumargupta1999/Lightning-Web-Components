import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex'
const columns=[
    {label:'First Name', fieldName:'FirstName', editable:true},
    {label:'Last Name', fieldName:'LastName', editable:true},
    {label:'Email', fieldName:'Email', type:'email'},
]
export default class RefreshDemoLwc extends LightningElement {
    columns = columns
    draftValues = []
    contactResult = null

     
    @wire(getContactList)
    contact;

    // @wire(getContactList)
    // contact(result){
    //     this.contactResult = result
    //     const {data, value} = result

    // }

    // get isContactAvailable(){
    //     console.log('Refresh Demo LWC',JSON.stringify(this.contact))
    //     return this.contact && this.contact.data && this.contact.data.length>0 ? 'Yes' : 'No';
    // }

    handleSave(event){
        console.log(event.detail.draftValues);
        const recordInputs = event.detail.draftValues.slice().map(draft =>{
            const fields = Object.assign({},draft);
            return {fields};
        });

        console.log('RecordInputs',recordInputs);

        const promises = recordInputs.map(recordInput => updateRecord(recordInput));
        Promise.all(promises)
           .then(result =>{
               this.showToastMessage('Success','Contacts Updated');
               this.draftValues=[]
               return refreshApex(this.contact)
           }).catch(error =>{
                this.showToastMessage('Error Creating record',error.body.message,error);
           })
    }

    showToastMessage(title,message,variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title:title,
                message:message,
                variant:variant||'success'
            })
        )
    }
}