import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToVfpage extends NavigationMixin(LightningElement) {
    navigateToVfPage(){
       
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/navigateVfPage'
            }
        }).then(generatedUrl =>{
            console.log(generatedUrl);
            window.open(generatedUrl,'_blank');
        })
    }
}