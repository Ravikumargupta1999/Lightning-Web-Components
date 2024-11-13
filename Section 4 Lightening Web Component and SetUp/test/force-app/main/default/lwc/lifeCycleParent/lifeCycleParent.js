import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super();
        // this.template.addEventListener('mousehover',fun)
        console.log('Parent Constructor called');

    }

    connectedCallback(){
        console.log('Parent Connectedcallback called');
        
    }

    renderedCallback(){
        console.log('Parent rendercallback called');
    }
    // name
    // changeHandler(event){
    //     this.name = event.target.name;
    // }

    isChildVisible = false
    handleClick(){
        this.isChildVisible = !this.isChildVisible;
    }

    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }
}