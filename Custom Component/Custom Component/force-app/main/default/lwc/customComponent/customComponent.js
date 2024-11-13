import { LightningElement, wire, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import updateContacts from '@salesforce/apex/ContactController.updateContacts';
import { notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import ID_FIELD from '@salesforce/schema/Contact.Id';
 
const COLS = [
    {
        label: "Name",
        type: "button",
        typeAttributes: { label: { fieldName: NAME_FIELD.fieldApiName },
        name: "gotoContact", variant: "base" }
    },
    {
        label: 'First Name',
        fieldName: FIRSTNAME_FIELD.fieldApiName,
        editable: true
    },
    {
        label: 'Last Name',
        fieldName: LASTNAME_FIELD.fieldApiName,
        editable: true
    },
    {
        label: 'Title',
        fieldName: TITLE_FIELD.fieldApiName,
        editable: true
    },
    {
        label: 'Phone',
        fieldName: PHONE_FIELD.fieldApiName,
        type: 'phone',
        editable: true
    },
    {
        label: 'Email',
        fieldName: EMAIL_FIELD.fieldApiName,
        type: 'email',
        editable: true
    }
 
]
 
export default class Spp215 extends NavigationMixin(LightningElement) {
    columns = COLS;
    draftValues = [];
    filters = {
        searchKey: ''
    };
    timer;
    availableContacts;
    error;
    cons;
 
    @wire(getContacts, {filters: '$filters'})
    contacts(result){
        this.cons = result;
        if(result.data)
        {
            this.availableContacts = result.data;
            this.error = undefined;
        }
        else if(result.error)
        {
            this.error = result.error;
            this.availableContacts = undefined;
        }
    }
 
 
    async handleSave(event) {
        const updateFields = event.detail.draftValues;
        console.log('update Fields : ',JSON.stringify(updateFields))
        // Prepare the recordId's for notifyRecordUpdateAvailable
        const notifyChangeIds = updateFields.map(row=>{return {"recordId": row.Id}});
        console.log('notifyChangeIds : ',JSON.stringify(notifyChangeIds))
 
        try{
            // Pass edited fields to the updateContacts Apex Controller
            const result = await updateContacts({data: updateFields});
            // console.log(result);
            console.log(JSON.stringify("Apex update result: " + result));
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contact updated',
                    variant: 'success'
                })
            );
 
            // Refresh LDS cache and wires
            notifyRecordUpdateAvailable(notifyChangeIds);
 
            // Display fresh data in the datatable
            await refreshApex(this.cons);
            // clear all draft values in the datatable
            this.draftValues = [];
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
 
 
    handleSearch(event){
        this.fetchData(event.target.value)
    }
 
    fetchData(key)
    {
        window.clearTimeout(this.timer)
        this.timer = window.setTimeout(()=>{
            this.filters = {...this.filters, "searchKey":key}
        }, 400)
    }
 
    handleRowAction(event){
        if (event.detail.action.name === "gotoContact") {
            this[NavigationMixin.GenerateUrl]({
                type: "standard__recordPage",
                attributes: {
                    recordId: event.detail.row.Id,
                    actionName: "view"
                }
            }).then((url) => {
                window.open(url, "_blank");
            });
        }
    }
   
}