import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesbyRecordTypeDemo extends LightningElement {
    ratingOptions
    industryOptions


    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo


    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,
        recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
        picklistHandler({data,error}){
            if(data){
                console.log(data)
                this.ratingOptions = this.pickListGenerator(data.picklistFieldValue.Rating);
                this.industryOptions = this.pickListGenerator(data.picklistFieldValue.Industry)
            }
            if(error){
                console.error(error);
            }
        }

    pickListGenerator(data){
        return data.values.map(item => ({'label':item.label,'value':item.value}))
    }    
}