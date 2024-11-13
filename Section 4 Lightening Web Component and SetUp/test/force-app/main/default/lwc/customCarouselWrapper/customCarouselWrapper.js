import { LightningElement } from 'lwc'
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/carousel'
export default class CustomCarouselWrapper extends LightningElement {

    slides=[
        {
            images:`${CAROUSEL_IMAGES}/carousel/photo1.jpg`,
            heading:'Caption 1',
            description:'You can add description of First Slide Here'
        },
        {
            images:`${CAROUSEL_IMAGES}/carousel/photo2.jpg`,
            heading:'Caption 3',
            description:'You can add description of Second Slide Here'
        },
        {
            images:`${CAROUSEL_IMAGES}/carousel/photo3.jpg`,
            heading:'Caption 3',
            description:'You can add description of Third Slide Here'
        }
       
    ]
}