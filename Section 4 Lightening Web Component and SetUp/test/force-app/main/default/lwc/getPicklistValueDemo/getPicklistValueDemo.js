import { LightningElement,wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import IDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValueDemo extends LightningElement {
    selectedIndustry = ''
    industryOptions = []
    selectedType = ''
    typeOptions =[[]]

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:IDUSTRY_FIELD})
    industryPicklist({data,error}){
        if(data){
            console.log(data)
            this.industryOptions = [...this.getPicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }

   

    getPicklist(data){
        return data.values.map(item => ({ label:item.label, value:item.value}))
    }
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }


    // <!Second Picklist for Type
    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:IDUSTRY_FIELD})
    typePicklist({data,error}){
        if(data){
            console.log(data)
            this.typeOptions = [...this.getPicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }

    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }


}