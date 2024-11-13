import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html';
import signUpTemplate from './signUpTemplate.html';
import renderTemplate from './renderMethod.html';

export default class RenderMethod extends LightningElement {
    selectedBtn = ''
    render(){
        // return renderTemplate;
        return this.selectedBtn === 'Signup' ? signUpTemplate : 
               this.selectedBtn === 'Signin' ? signInTemplate :
               renderTemplate;
    }

    handleClick(event){
        this.selectedBtn = event.target.label;
    }

    submitHandler(){
        console.log(`${event.target.label} Successfully`);
    }
}