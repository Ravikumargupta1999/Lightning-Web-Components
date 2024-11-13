import { LightningElement, track } from 'lwc';

import dummContactCreateMethod from '@salesforce/apex/DummyContactHandler.dummContactCreateMethod'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RegistrationForm extends LightningElement {
    @track fullName = { firstName: '', lastName: '', phone: '', address: '', email: '', aadhar: '', dob: '',roles : [],guardianname:'',guardianAadhar:'',notifications:''}
    @track todaysDate = new Date()
    
    @track aadharValue
    @track toggle = 'off'
    @track storeAadhar
    @track iconName = 'utility:hide';

    @track age = false



    @track guardianAadharValue
    @track gtoggle = 'off'
    @track gstoreAadhar
    @track giconName = 'utility:hide';



    @track check

    get backgroundStyle() {
        return ``;
    }

    handleChange(event) {
        console.log('Hello')
        if (event.target.name === 'firstname') {
            this.fullName = { ...this.fullName, firstName: event.target.value }
        }
        if (event.target.name === 'lastname') {
            this.fullName = { ...this.fullName, lastName: event.target.value }
        }
        if (event.target.name === 'mobileNumber') {
            this.fullName = { ...this.fullName, phone: event.target.value }
        }
        if (event.target.name === 'address') {
            this.fullName = { ...this.fullName, address: event.target.value }
        }
        if (event.target.name === 'email') {
            this.fullName = { ...this.fullName, email: event.target.value }
        }
        if (event.target.name === 'aadharNumber') {
            let val = event.target.value
            const a = new Set(['1', '2', '3','4','5','6','7','8','9','0'])
            console.log(a)
            let temp = this.template.querySelector(".aadharCmp");
            if (val.length > this.fullName.aadhar.length) {
                console.log('If')
                let ch = val.substring(val.length - 1)
                console.log('1');
                if(!a.has(ch)){
                    console.log('1 ka if')
                    console.log('2')
                   
                    console.log('3')
                    temp.setCustomValidity("Aadhar number does not take character");
                    console.log('4')
                    temp.reportValidity();
                

                }else{
                    temp.setCustomValidity("");
                    console.log('1 ka else')
                    this.fullName = { ...this.fullName, aadhar: this.fullName.aadhar + '' + ch }
                 
                }
                console.log('Complete if')
            } else {
                console.log('Else')
                if (val.length === 0) {
                    this.fullName = { ...this.fullName, aadhar: '' }
                } else {
                    this.fullName = { ...this.fullName, aadhar: this.fullName.aadhar.substring(0, this.fullName.aadhar.length - 1) }
                }
                temp.setCustomValidity("");
    

            }
            temp.reportValidity();
            console.log('this.fullName.aadhar : ', this.fullName.aadhar)
            this.handleValues(this.fullName.aadhar)

            // this.handleValues(this.fullName.aadhar)
        }
        if (event.target.name === 'date') {
            console.log('Date : ', event.target.value)
            let today = new Date();
            let dob = new Date(event.target.value)
            console.log('Todays Date : ', today)
            console.log('DOB : ', dob)

            let date1 = new Date(dob).getTime();
            let date2 = new Date(today).getTime();

            if (date1 < date2) {
                // console.log(`Dob ${dob} is less than ${today}`);
                console.log(`Dob is less than today`);
            } else if (date1 > date2) {
                // console.log(`${dob} is greater than ${today}`);
                console.log(`dob is greater than today`);

            } else {
                console.log(`Both dates are equal`);
            }


            let dateCmp = this.template.querySelector(".dateCmp");
            if (date1 > date2) {
                dateCmp.setCustomValidity("DOB cannot be a future date");
                this.age = false
            } else {
                this.fullName = { ...this.fullName, dob: dob }
                let birthYear = dob.getFullYear()
                let currentYear = today.getFullYear()
                console.log('age : ',(currentYear-birthYear))
                if(currentYear-birthYear < 18){
                    this.age = true
                }else{
                    this.age = false
                    this.fullName = {...this.fullName,guardianname:'',guardianAadhar:''}
                    this.guardianAadharValue = ''
                }
                dateCmp.setCustomValidity("");
            }
          
            dateCmp.reportValidity();

        }
        if (event.target.name === 'guardianname') {
            this.fullName = { ...this.fullName, guardianname: event.target.value }
        }


        if(event.target.name === 'guardianAadharNumber'){
            let val = event.target.value
            if (val.length > this.fullName.guardianAadhar.length) {
                let ch = val.substring(val.length - 1)
                this.fullName = { ...this.fullName, guardianAadhar: this.fullName.guardianAadhar + '' + ch }
              
            } else {
                if (val.length === 0) {
                    this.fullName = { ...this.fullName, guardianAadhar: '' }
                } else {
                    this.fullName = { ...this.fullName,guardianAadhar: this.fullName.guardianAadhar.substring(0, this.fullName.guardianAadhar.length - 1) }
                }

            }
            console.log('this.fullName.aadhar : ', this.fullName.guardianAadhar)
            this.handleGuardianValues(this.fullName.guardianAadhar)
        }

        if (event.target.name === 'guardianname') {
            this.fullName = { ...this.fullName, guardianname: event.target.value }
        }

        if(event.target.name === 'notifications'){
            if(event.target.value === 'yes'){
                this.fullName = { ...this.fullName, notifications:true }
            }else{
                this.fullName = { ...this.fullName, notifications:false }
            }
        }

        console.log(JSON.stringify(this.fullName))
    }

    handleValues(value) {
        // console.log(2 + "   " + this.fullName.aadhar)
        if (value.length > 0) {
            this.aadharValue = ''
            for (let i = 0; i < Math.min(value.length, 12); i++) {
                this.aadharValue = this.aadharValue + "\u2022"
            }
        }
        if (value.length >= 12) {
            this.aadharValue = this.aadharValue + value.substring(12)
        }
        console.log(this.aadharValue + "  " + this.aadharValue.length)

        
    }
    onblurEvent(event){
        console.log('Called Blurred Event')
        let temp = this.template.querySelector(".aadharCmp");
        if (event.target.value.length !== 16) {
            temp.setCustomValidity("Adhaar number should be of 16 digit");
        } else {                
            temp.setCustomValidity("");
        }
        temp.reportValidity();
    }





    // if (event.target.name === 'aadharNumber') {
    //     let val = event.target.value
    //     const a = new Set(['1', '2', '3','4','5','6','7','8','9','0'])
    //     console.log(a)
    //     let temp = this.template.querySelector(".aadharCmp");
    //     if (val.length > this.fullName.aadhar.length) {
    //         console.log('If')
    //         let ch = val.substring(val.length - 1)
    //         console.log('1');
    //         if(!a.has(ch)){
    //             console.log('1 ka if')
    //             console.log('2')
               
    //             console.log('3')
    //             temp.setCustomValidity("Aadhar number does not take character");
    //             console.log('4')
    //             temp.reportValidity();
            

    //         }else{
    //             temp.setCustomValidity("");
    //             console.log('1 ka else')
    //             this.fullName = { ...this.fullName, aadhar: this.fullName.aadhar + '' + ch }
             
    //         }
    //         console.log('Complete if')
    //     } else {
    //         console.log('Else')
    //         if (val.length === 0) {
    //             this.fullName = { ...this.fullName, aadhar: '' }
    //         } else {
    //             this.fullName = { ...this.fullName, aadhar: this.fullName.aadhar.substring(0, this.fullName.aadhar.length - 1) }
    //         }
    //         temp.setCustomValidity("");


    //     }
    //     temp.reportValidity();
    //     console.log('this.fullName.aadhar : ', this.fullName.aadhar)
    //     this.handleValues(this.fullName.aadhar)

    //     // this.handleValues(this.fullName.aadhar)
    // }

    
    mobileNumberValidation(event){
        let temp = this.template.querySelector(".mobileCmp");
        // console.log(JSON.stringify(temp)+"   "+temp.length)
        if (event.target.value.length !== 10) {
            temp.setCustomValidity("Mobile number should be of 10 digit Number");
        } else {                
            temp.setCustomValidity("");
        }
        temp.reportValidity();
    }
    handleGuardianValues(value){
        if (value.length > 0) {
            this.guardianAadharValue = ''
            for (let i = 0; i < Math.min(value.length, 12); i++) {
                this.guardianAadharValue = this.guardianAadharValue + "\u2022"
            }
        }
        if (value.length >= 12) {
            this.guardianAadharValue = this.guardianAadharValue + value.substring(12)
        }
        console.log(this.guardianAadharValue + "  " + this.guardianAadharValue.length)
    }

    handleToggleAction(){
        this.iconName = this.iconName === 'utility:hide' ? 'utility:preview' : 'utility:hide';

        console.log('Toggle Action Triggered')
        if (this.toggle === 'off') {
            console.log('Toggle : ', this.toggle)
            this.toggle = 'on'
            this.storeAadhar = this.aadharValue
            this.aadharValue = this.fullName.aadhar
            console.log('this.aadharValue : ', this.aadharValue, "   this.storeAadhar : ", this.storeAadhar)
        } else {
            console.log('Toggle : ', this.toggle)
            this.toggle = 'off'
            this.aadharValue = this.storeAadhar
        }
    }
    handleParentsToggleAction(){
        this.giconName = this.giconName === 'utility:hide' ? 'utility:preview' : 'utility:hide';

        console.log('gToggle Action Triggered')
        if (this.gtoggle === 'off') {
            console.log('Toggle : ', this.toggle)
            this.gtoggle = 'on'
            this.gstoreAadhar = this.guardianAadharValue
            this.guardianAadharValue = this.fullName.guardianAadhar
            console.log('this.guardianAadharValue : ', this.guardianAadharValue, "   this.gstoreAadhar : ", this.gstoreAadhar)
        } else {
            console.log('Toggle : ', this.toggle)
            this.gtoggle = 'off'
            this.guardianAadharValue = this.gstoreAadhar
        }
    }



    @track value = [];
    rolesAvailable = [
        { label: 'Application Engineer', value: 'option1' },
        { label: 'Member Of Technical Staff', value: 'option2' },
        { label: 'Software Development Engineer', value: 'option3' },
        { label: 'Salesforce Administrator', value: 'option4' },
        { label: 'Project Manager', value: 'option5' },
        { label: 'Software Quality Engineer', value: 'option6' }
    ];
    get options() {
        return this.rolesAvailable
    }
    handleSelectedValues(event){
        console.log('event.target.value : ',JSON.stringify(event.target.value));
        
        let set = new Set(event.target.value);
        console.log('Set : ',set)
        let temp = this.rolesAvailable.filter(role =>{
            return set.has(role.value)
        })
        console.log('Temp : ',JSON.stringify(temp))

        this.fullName = {...this.fullName,roles : [...temp]}
        console.log('fullName : ',JSON.stringify(this.fullName))

    }



    @track radioValues = '';

    get radioOptions() {
        return [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ];
    }

    handlSubmit(){
        console.log('Register Handle Clicked!');
        this.check = false
        // 1
        let temp1 = this.template.querySelector(".c1");
        if(this.fullName.firstName === ''){
            this.check = true
            temp1.setCustomValidity("Complete this field.");           
        }else{
            temp1.setCustomValidity('');
        }
        temp1.reportValidity();




         // 2
         let temp2 = this.template.querySelector(".c2");
         if(this.fullName.lastName === ''){
             this.check = true
             temp2.setCustomValidity("Complete this field.");           
         }else{
             temp2.setCustomValidity('');
         }
         temp2.reportValidity();

         

         // 3
         let temp3 = this.template.querySelector(".c3");
         if(this.fullName.phone === ''){
             this.check = true
             temp3.setCustomValidity("Complete this field.");           
         }else{
             temp3.setCustomValidity('');
         }
         temp3.reportValidity();


        

         // 4
         let temp4 = this.template.querySelector(".c4");
         if(this.fullName.address === ''){
            this.check = true
             temp4.setCustomValidity("Complete this field.");           
         }else{
             temp4.setCustomValidity('');
         }
         temp4.reportValidity();




         // 5
         let temp5 = this.template.querySelector(".c5");
         if(this.fullName.notifications === ''){
            this.check = true
             temp5.setCustomValidity("Complete this field.");           
         }else{
             temp5.setCustomValidity('');
         }
         temp5.reportValidity();
        
        

         // 6
         let temp6 = this.template.querySelector(".c6");
         if(this.fullName.email === ''){
            this.check = true
            temp6.setCustomValidity("Complete this field.");           
         }else{
             temp6.setCustomValidity('');
         }
         temp6.reportValidity();
         


         // 7
         let temp7 = this.template.querySelector(".c7");
         if(this.fullName.aadhar === '' || this.fullName.aadhar.length!== 16){
             this.check = true
             if(this.fullName.aadhar){
                temp7.setCustomValidity("Complete this field.");
             }
            else{
                temp7.setCustomValidity("Aadhar Number Should be 16 digit Number");
            }           
         }else{
             temp7.setCustomValidity('');
         }
         temp7.reportValidity();
        

         // 8
         let temp8 = this.template.querySelector(".c8");
         if(this.fullName.dob === ''){
             this.check = true
             temp8.setCustomValidity("Complete this field.");           
         }else{
             temp8.setCustomValidity('');
         }
         temp8.reportValidity();
        

         // 9
         let temp9 = this.template.querySelector(".c9");
         if(this.fullName.roles.length === 0){
             this.check = true
             temp9.setCustomValidity("Complete this field.");           
         }else{
             temp9.setCustomValidity('');
         }
         temp9.reportValidity()
         
         console.log('Age : ',this.age,'   check : ',this.check)
         if(!this.age  && this.check){
            console.log('Registration failed')
            return;
         }
       


         // 10
         if(this.age){
            let temp10 = this.template.querySelector(".c10");
            if(this.fullName.guardianname === ''){
                this.check = true
                temp10.setCustomValidity("Complete this field.");           
            }else{
                temp10.setCustomValidity('');
            }
            temp10.reportValidity()


           
             // 11
             let temp11 = this.template.querySelector(".c11");
            if(this.fullName.guardianAadhar === ''){
                this.check = true
                temp11.setCustomValidity("Complete this field.");           
            }else{
                temp11.setCustomValidity('');
            }
            temp11.reportValidity()

            if(this.check){
                console.log('Registration failed')
                return;
             }
         }
       
         
        console.log('Registrartion Completetd')


        let arr = []
        console.log(this.fullName.roles.length)
        for(let i =0;i<this.fullName.roles.length;i++){
            console.log("hello");
            console.log(this.fullName.roles[i].label);
            console.log('22')
            arr.push(this.fullName.roles[i].label)
        }
        console.log("hi");
        console.log('Roles : ',JSON.stringify(arr));
        dummContactCreateMethod({
            s1: this.fullName.firstName,
            s2: this.fullName.lastName,
            s3: this.fullName.phone,
            s4: this.fullName.address,
            s5: this.fullName.email,
            s6: this.fullName.notifications,
            s7: this.fullName.aadhar,
            s8: this.fullName.dob,
            s9: this.fullName.guardianname,
            s10: this.fullName.guardianAadhar,
            li : arr

        })
           .then(res =>{
                this.dispatchEvent(
                    new ShowToastEvent({

                        title: 'Success',
                        message: 'Contact created',
                        variant: 'success'
                    })
                );
           })
           .catch( err =>{
                console.log('Error : ',err)
                this.dispatchEvent(
                    new ShowToastEvent({

                        title: 'Error',
                        message: 'Error in Creating Community Contact',
                        variant: 'error'
                    })
                );
           })


    }
}

// 1234123412341234