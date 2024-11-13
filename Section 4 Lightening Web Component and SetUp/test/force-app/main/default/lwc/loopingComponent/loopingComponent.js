import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {
    carList = ['Ford','Audi','Maruti','Hyundai','Mercedes'];


    ceoList = [
        {
            id: 1,
            company : 'Google',
            name : 'Sundar Pichai'
        },
        {
            id : 2,
            company : 'Apple Inc.',
            name : 'Tim cook'
        },
        {
            id : 3,
            company : 'facebook',
            name : 'Mark Zukerbug'
        },
        {
            id : 4,
            company : 'Amazon',
            name : 'Jeff bezos'
        }
    ]
}