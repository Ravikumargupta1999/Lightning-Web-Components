import { LightningElement, api, wire } from 'lwc';
import getSimilarCars from '@salesforce/apex/CarController.getSimilarCars'
import { getRecord } from 'lightning/uiRecordApi';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'
export default class SimilarCars extends LightningElement {
    similarCars
    @api recordId
    @wire(getRecord,{recordId:'$recordId',fields:[MAKE_FIELD]})
    car


    fetchSimilarCars(){
        getSimilarCars({
            carId:this.recordId,
            makeType: this.car.data.fields.Make__c.value
        }).then( result =>{
            this.similarCars = result
            console.log('Similar cars : ',this.similarCars)
        }).catch(error =>{
            console.error(error)
        })
    }
}