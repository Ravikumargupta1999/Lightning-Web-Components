import { LightningElement,track,api } from 'lwc';

export default class PicklistValue extends LightningElement {
    @api
    selected = false;
    
    @api
    label;
    
    @api
    value;


    handleSelect(event) {
        //this.selected = true;
        
        if(this.selected){
            this.selected = false;
        }else{
            this.selected = true;
        } 
        
    }
}