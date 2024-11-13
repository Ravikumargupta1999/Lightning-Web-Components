import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    isLoaded = false;
    renderedCallback(){
        if(this.isLoaded)
           return ;
        const style = document.createElement('style');
        style.innerText = `c-shoadow-dom-styling .slds-button{
            background: red;
    color: wheat;
        }`;
        this.template.querySelector('lightning-button').appendChild(style);
        this.isLoaded = true;
    }
}