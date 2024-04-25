import {MappingFactory} from "../../../abstract/mapping.factory.ts";
import type {Banner5050} from 'src/types/sanity/sanity.types.ts';
import type {Banner5050Mapping} from 'src/models/components/banner5050/banner5050.mapping.ts';
import type {Button} from 'src/models/components/button/button.interface.ts';
import {ComponentsList} from 'src/models/super/components.type.ts';
import imageUrlBuilder from '@sanity/image-url'
import {sanityClient} from 'sanity:client';

export class banner5050MappingFactory extends MappingFactory {
    createMapping(component: Banner5050): Banner5050Mapping {
        const imageBuilder = imageUrlBuilder(sanityClient);
        
        const sanityButton1 = component.content![0];
        const sanityButton2 = component.content![1];
        
        const button1: Button = {
            componentName: ComponentsList.Button,
            title: sanityButton1.title!,
            description: sanityButton1.description,
            buttonText: sanityButton1.buttonText!,
            image: sanityButton1.image ? {name: 'button image', url: imageBuilder.image(sanityButton1.image!).url()}: undefined,
            url: sanityButton1.linkType === 'internal' ? sanityButton1.internal?._ref! : sanityButton1.external!,
        }
        
        const button2: Button = {
            componentName: ComponentsList.Button,
            title: sanityButton2.title!,
            description: sanityButton2.description,
            buttonText: sanityButton2.buttonText!,
            image: sanityButton2.image ? {name: 'button image', url: imageBuilder.image(sanityButton2.image!).url()} : undefined,
            url: sanityButton2.linkType === 'internal' ? sanityButton2.internal?._ref! : sanityButton2.external!,
        }
        
        return {
            buttons: [button1, button2]
        }
    }
}