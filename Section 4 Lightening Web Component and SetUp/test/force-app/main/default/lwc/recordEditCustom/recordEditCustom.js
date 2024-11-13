import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue
    handleChange(event){
        this.inputValue = event.target.value
    }

    handleSubmit(event){
        event.preventDefault();
        const inputCmp = this.template.querySelector('ightning-input')
       
    }
}