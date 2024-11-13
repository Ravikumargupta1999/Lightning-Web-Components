import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closeHandler(){
        const myEvent = new CustomEvent('close',{
            bubbles : true,
            // here we can pass object as well
            detail: "Modal Closed Successfully"
        });
        this.dispatchEvent(myEvent);
    }
    footerHandler(){
        console.log('Footer Handler Called')
    }
}