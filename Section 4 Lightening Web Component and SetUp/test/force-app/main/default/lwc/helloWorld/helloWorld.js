import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    // name // undefined
    // age = 30
    // fullName = 'Salesforce India'
    // showData = false
    // details = {
    //     name : 'Dummy',
    //     place : 'Meburne'
    // }
    // userList = ['A','B','C']


    // fullName = 'Zero to Hero';
    // users = ['A','B','C'];
    // obj = {
    //     name : 'Ravi'
    // }

    // method
    // getName(){
    //     // perfrm my logic
    // }


    fullName = 'Zero to Hero';
    title = 'Aura';


    changeHandler(event){
        this.title = event.target.value;
    }


    // @track address = {
    //     city : 'Melbourne',
    //     postCode : 3008,
    //     country : 'Australia'
    // }


    // trackHandler(event){
    //     this.address.city = event.target.value;
    // }

    @track address = {
        city : 'Melbourne',
        postCode : 3008,
        country : 'Australia'
    }


    trackHandler(event){
        this.address.city = {...this.address, "city" :  event.target.value};
    }

    userList = ['a','b','c'];



    // getter example
    users = ['Ravi','Himanshu','Ankush'];
    num1 = 10;
    num2 = 20;


    // this.firstUser = this.users[0]
    get firstUser(){
        return this.users[0].toUpperCase();
    }

    get multiplication(){
        return this.num1*this.num2;
    }
    
}