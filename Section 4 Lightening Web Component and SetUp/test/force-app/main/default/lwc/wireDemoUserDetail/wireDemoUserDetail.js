import { LightningElement,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD,EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    userDetail

    // @wire(getRecord,{recordId:'0051y00000OPS3PAAX',fields:['User.Name','User.Email']})
    // @wire(getRecord,{recordId: this.userId,fields:fields})
    @wire(getRecord,{recordId: '$userId',fields:fields})
    userDetailHandler({data,error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            this.error(error)
        }
    }

    // @wire(getRecord,{recordId:'0051y00000OPS3PAAX',fields:['User.Name','User.Email']})
    @wire(getRecord,{recordId:'$userId',fields})
    userDetailProperty
}