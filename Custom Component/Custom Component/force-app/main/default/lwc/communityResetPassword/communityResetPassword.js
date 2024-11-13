import { LightningElement, track } from 'lwc';
// import background from '@salesforce/resourceUrl/background'
export default class CommunityResetPassword extends LightningElement {
    @track userDetail = {userName : ''}
    handleChange(event){
        this.userDetail = {...this.userDetail,userName : event.target.value}
        console.log(JSON.stringify(this.userDetail))
    }
    get backgroundStyle() {
        return ``;
    }
}