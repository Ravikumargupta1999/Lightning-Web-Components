import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';
export default class ThirdPartyFiles extends LightningElement {
    currentDate
    isLibLoaded = false
    renderedCallback(){
        if(this.isLibLoaded){
            return
        }else{
            
            Promise.all([
                loadStyle(this,ANIMATE + '/animate/animate.min.js'),
                loadScript(this,MOMENT + '/moment/moment.min.js')
            ]).then(() =>{
                this.setDateOnScreen();
            })
             this.isLibLoaded = true
        }
       
    }

    setDateOnScreen(){
        console.log("Set Date On Screen");
        this.currentDate = moment().format('LLLL');
    }
}


// import { LightningElement } from 'lwc';
// import MOMENT from '@salesforce/resourceUrl/moment';
// import {loadScript} from 'lightning/platformResourceLoader';
// export default class ThirdPartyFiles extends LightningElement {
//     currentDate
//     isLibLoaded = false
//     renderedCallback(){
//         if(this.isLibLoaded){
//             return
//         }else{
//             //  Promise.all([
//             //     loadScript(this,MOMENT + '/moment/moment.min.js')
//             // ]).then(() =>{
//             //     // success
//             //     this.setDateOnScreen();
//             // }).catch( error =>{
//             //     console.error(error);
//             // })

          
//             loadScript(this,MOMENT + '/moment/moment.min.js')
//             .then(() =>{
//                 // success
//                 this.setDateOnScreen();
//             }).catch( error =>{
//                 console.error(error);
//             })
//         }
//         this.isLibLoaded = true
//     }

//     setDateOnScreen(){
//         console.log('Hey Rishika, Long Time No See!')
//         this.currentDate = moment().format('LLLL');
//     }
// }