import { LightningElement,api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    // @api detail
    userDetail
    @api get detail(){
        return this.userDetail
    }
    set detail(data){
        // data.age = data.age*2
        // this.userDetail = data;

        let newAge = data.age*2;
        this.userDetail = {...data,age:newAge,'location' : 'Melbourne'};
    }
}