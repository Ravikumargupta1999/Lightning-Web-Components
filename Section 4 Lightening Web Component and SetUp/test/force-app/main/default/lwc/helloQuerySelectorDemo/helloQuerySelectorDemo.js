import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames = ['John','Smith','Mike'];
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1');
        elem.style.border = '2px Solid red';
        console.log(elem.innerHTML);


        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item =>{
            console.log(item.innerText);
            item.setAttribute('title',item.innerText);  
        });

        //lwc:mannual demo
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = '<p> Hey I am a Child Element </p>';
    }
}