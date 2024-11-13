import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {
    isOpen
    isSecondOpen
    openHandler(){
        console.log('Clicked')
        this.isOpen = true
    }
    openSecondHandler(){
        this.isSecondOpen = true
    }
    closeHandler(){
        this.isOpen = false
    }

    secondCloseHandler(){
        this.isSecondOpen = false
    }
}