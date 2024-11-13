import { LightningElement,wire } from 'lwc';
import getCars from '@salesforce/apex/CarController.getCars'

/** Lightning Message Service as a Channel */
import { subscribe,publish, MessageContext,unsubscribe } from 'lightning/messageService';
import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/CarsFiltered__c'
import CAR_SELECTED_MESSAGE from '@salesforce/messageChannel/CarSelected__c'

export default class CarTileList extends LightningElement {
    cars=[]
    error 
    filters = {}
    carFilterSubscription
    @wire(getCars,{filters:'$filters'})
    carsHandler({data,error}){
        if(data){
            console.log('Data : ',data)
            this.cars=  data
        }
        if(error){
            console.error('Error : ',error)
            this.error = error
        }
    }

    /** Load Context for LMS */
    @wire(MessageContext)
    messageContext

    connectedCallback(){
        this.subscribeHandler()
    }

    subscribeHandler(){
         this.carFilterSubscription = subscribe(this.messageContext,CARS_FILTERED_MESSAGE,(message)=> this.handleFilterChanges(message))
    }

    handleFilterChanges(message){
        // console.log('Message: ',message)
        // console.log('message.filters: ',message.filters)
        this.filters = {...message.filters}
        // console.log('Filters: ',this.filters)

    }

    handleCarSelected(event){
        console.log('Selected Car Id',event.detail)
        publish(this.messageContext,CAR_SELECTED_MESSAGE,{
            carId:event.detail
        })
    }

    disconnectedCallback(){
        unsubscribe(this.carFilterSubscription)
        this.carFilterSubscription = null
    }
}