import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        // this.template.addEventListener('mousehover',fun)
        console.log('Child Constructor called');

    }
    // interval
    connectedCallback(){
        console.log('Child Connectedcallback called');
        // Window.addEventListner('click',this.handleClick);
       //  this.interval =  window.setInterval();

       throw new Error('Loading Of Child Component failed');

    }

    renderedCallback(){
        console.log('Child rendercallback called');
    }

    disconnectedCallback(){
        alert('Child disconnectedCallback called');
        // Window.removeEventListner('click',this.handleClick);

        window.clearInterval(interval)
    }
}