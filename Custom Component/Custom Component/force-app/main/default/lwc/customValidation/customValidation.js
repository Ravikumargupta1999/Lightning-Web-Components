import { LightningElement,track } from 'lwc';

export default class CustomValidation extends LightningElement {
    // testTheData() {
    //     let dateCmp = this.template.querySelector(".dateCmp");
    //     let dtValue = dateCmp.value;
    //     if (!dtValue) {
    //         dateCmp.setCustomValidity("Date value is required");
    //     } else {
    //          dateCmp.setCustomValidity("");
    //     }
    //     dateCmp.reportValidity();
    // }


    @track password = '';
    @track inputType = 'password';
    @track iconName = 'utility:hide';

    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    togglePasswordVisibility() {
        this.inputType = this.inputType === 'password' ? 'text' : 'password';
        this.iconName = this.iconName === 'utility:hide' ? 'utility:preview' : 'utility:hide';
    }

}