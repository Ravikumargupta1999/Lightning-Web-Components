import { LightningElement, wire } from 'lwc';
import SAMLPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe,MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    recievedMessage
    subscription
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage();
    }
    subscribeMessage(){

        this.subscription = subscribe(this.context,SAMLPLEMC,(message) =>{this.handleMessage(message)},{scope : APPLICATION_SCOPE});
    }

    handleMessage(message){
        this.recievedMessage = message.lmsData.value ? message.lmsData.value : 'No Message Published';
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    
}