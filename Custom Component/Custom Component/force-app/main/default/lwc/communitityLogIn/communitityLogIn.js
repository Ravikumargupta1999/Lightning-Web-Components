import { LightningElement,track } from 'lwc';
import saveImgFile from '@salesforce/apex/DummyContactHandler.saveImgFile';

export default class CommunitityLogIn extends LightningElement {
    acceptedFormats = ['.jpg', '.jpeg', '.gif', '.png'];

    handleUploadFile(event) {
        if (event.detail.files && event.detail.files.length) {
            const imgFile = event.detail.files[0];
            // you could check the file size (imgFile.size)
            
            this.showSpinner = true;
            
            const fileReader = new FileReader();
            fileReader.onloadend = (() => {
                const apexParams = {
                    fileName: imgFile.name,
                    fileType: imgFile.type
                };
                let result = fileReader.result;
                const base64 = 'base64,';
                const i = result.indexOf(base64) + base64.length;
                apexParams.base64Body = result.substring(i);
                saveImgFile(apexParams); // call to apex
                this.showSpinner = false; // this should be in the then() of apex call
            });
    
            fileReader.readAsDataURL(imgFile);
        }
    }
}