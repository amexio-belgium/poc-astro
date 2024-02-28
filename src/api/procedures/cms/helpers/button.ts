import {type Button, ButtonColors, ButtonTypes, type Image} from '@trpc-procedures/cms/types.ts';
import type {Page, SharedHeaderComponent} from 'src/types/generated.schemas.ts';

export function getButtonType(type: string|undefined){
    switch (type){
        case 'card':
            return ButtonTypes.CARD
        case 'tile':
            return ButtonTypes.TILE
        case 'icon':
            return ButtonTypes.ICON
    }
    return null;
}

export function getButtonColor(type: string|undefined){
    switch (type){
        case 'Default':
            return ButtonColors.DEFAULT
        case 'Marked':
            return ButtonColors.MARKED
    }
    return null;
}

export function getButtons(component: SharedHeaderComponent){
    const buttons: Button[] = [];
    component.buttons?.forEach((button)=>{
        const buttonLinkPage = button.link?.data?.attributes as Page;
        buttonLinkPage.slug
        buttons.push(
            {
                title: button.title,
                description: button.description,
                url: button.externalUrl? button.externalUrl : buttonLinkPage.slug,
                type: getButtonType(button.type),
                color: getButtonColor(button.color),
                image: {
                    name: button.image?.data?.attributes?.name,
                    url: button.image?.data?.attributes?.url
                } as Image
            } as Button
        )
    })
    
    return buttons;
}