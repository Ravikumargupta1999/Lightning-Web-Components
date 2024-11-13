import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c'

// Car Schema
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'

// Constants
const CATEGORY_ERROR = 'Error loading categories'
const MAKE_ERROR = 'Error loading MakeType'

/** Lightning Message Service as a Channel */
import { publish, MessageContext } from 'lightning/messageService';
import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/CarsFiltered__c'

export default class CarFilter extends LightningElement {
    filters = {
        searchKey: '',
        maxPrice: '999999'
    }

    categoryError = CATEGORY_ERROR
    makeError = MAKE_ERROR
    timer 
    /** Load Context for LMS */
    @wire(MessageContext)
    messageContext


    /** Fetching Category PickList */
    @wire(getObjectInfo, { objectApiName: CAR_OBJECT })
    carObjectInfo

    @wire(getPicklistValues, {
        recordTypeId: '$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName: CATEGORY_FIELD
    }) categories


    /** Fetching Make PickList */
    @wire(getPicklistValues, {
        recordTypeId: '$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName: MAKE_FIELD
    }) makeType

    /** Search Key Handler */
    handleSearchKeyChange(event) {
        console.log('Search :', event.target.value)
        this.filters = { ...this.filters, 'searchKey': event.target.value }
        this.sendDataToCarList()
    }


    /** Price Range Handler */
    handleMaxPriceChange(event) {
        console.log('Max Price :', event.target.value)
        this.filters = { ...this.filters, 'maxPrice': event.target.value }
        this.sendDataToCarList()
    }

    handleCheckBox(event) {
        console.log('Handle', JSON.stringify(this.filters))
        // if(!this.filters.categories){
        //     console.log('Categories: ',this.categories.data.values[0],'MakeType: ',this.makeType.data.values)
        //     const categories = this.categories.data.values.map((item,index)=>{
        //         console.log('Item :',item,' Value: ',item.value,'  Index:  ',index)
        //         return item.value
        //     })
        //     const makeType = this.makeType.data.values.map(item=>item.value)
        //     this.filters = {...this.filters,categories,makeType}
        //     console.log('Categories : ',categories)
        //     console.log('makeType: ',makeType)
        //     console.log('Filters: ',this.filters)
        // }

        if(!this.filters.categories){
            const categories = this.categories.data.values.map(item=>item.value);
            const makeType = this.makeType.data.values.map(item=>item.value);
            this.filters = {...this.filters, categories, makeType};
            console.log('categories: ',JSON.stringify(categories));
            console.log('makeType: ',JSON.stringify(makeType))
            console.log('Filters: ',JSON.stringify(this.filters))
        }

        const { name, value } = event.target.dataset
        console.log('Name: ', name)
        console.log('Value: ', value)
        if(event.target.checked){
            console.log("1 If", JSON.stringify(this.filters),'   Name: ',name)
            if(!this.filters[name].includes(value)){
                console.log("2 If", JSON.stringify(this.filters))
                this.filters[name] = [...this.filters[name],value]
            }
            console.log("3 If", JSON.stringify(this.filters))
        }
        else{
            console.log("1 Else", JSON.stringify(this.filters))
            this.filters[name] = this.filters[name].filter(item => item !== value)
            console.log("2 Else", JSON.stringify(this.filters))
        }
        this.sendDataToCarList()

        
    }

    sendDataToCarList() {
        window.clearTimeout(this.timer)
        this.timer = window.setTimeout(()=>{
            publish(this.messageContext, CARS_FILTERED_MESSAGE, {
                filters:this.filters
            })
        }, 400)
    }
}