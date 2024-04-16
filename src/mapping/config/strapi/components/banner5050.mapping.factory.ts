import type {SharedBanner5050Component, SharedButtonComponent} from "../../../../types/strapi/generated.schemas.ts";
import type {
    Banner5050Mapping,
    BannerCardMapping
} from "../../../../models/components/banner5050/banner5050.mapping.ts";
import {MappingFactory} from "../../../abstract/mapping.factory.ts";
import type {ButtonMapping} from "../../../../models/components/button/button.mapping.ts";

export class banner5050MappingFactory extends MappingFactory {
    createMapping(component: SharedBanner5050Component): Banner5050Mapping {

        let cards: BannerCardMapping[] = [];
        let countCards = 0;

        component.buttons?.forEach(button => {
            const card: BannerCardMapping = {
                image: { url: button.image?.data?.attributes?.url || '' },
                title: button.title || '',
                description: button.description || '',
                button: this.createButtonMapping(button)
            }

            countCards+=1;

            if (countCards <= 2) {
                cards.push(card);
            } else {
                return;
            }
        });

        return { cards };
    }

    createButtonMapping(button: SharedButtonComponent): ButtonMapping {
        return {
            url: button.externalUrl || '',
            text: button.buttonText || ''
        }
    }
}