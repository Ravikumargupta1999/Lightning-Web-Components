import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class ApexImpretiveDemo extends LightningElement {
    accounts
    handleClick(){
        getAccountList()
            .then(result =>{
                console.log(result)
                this.accounts = result
            }).catch(error =>{
                console.error(error);
            })
    }
}