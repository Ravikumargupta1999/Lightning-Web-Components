import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToLWC extends NavigationMixin(LightningElement) {
    navigateToLwc(){
        var definition = {
            componentDef:'c:navigationLwcTarget',
            attributes:{
                recordId:'32353546523'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }
}