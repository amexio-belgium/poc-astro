import type {SharedBanner5050Component, SharedButtonComponent} from "src/types/strapi/generated.schemas.ts";
import type {
    Banner5050Mapping,
} from "src/models/components/banner5050/banner5050.mapping.ts";
import {MappingFactory} from "../../../abstract/mapping.factory.ts";
import type {Button} from 'src/models/components/button/button.interface.ts';
import {ComponentsList} from 'src/models/super/components.type.ts';

export class banner5050MappingFactory extends MappingFactory {
    createMapping(component: SharedBanner5050Component): Banner5050Mapping {
        const strapiButton1 = component.buttons![0];
        const strapiButton2 = component.buttons![1];

        const button1: Button = this.createButtonMapping(strapiButton1);
        
        const button2: Button = this.createButtonMapping(strapiButton2);
        

        return {buttons: [button1,button2]} ;
    }

    createButtonMapping(button: SharedButtonComponent): Button {
        return {
            componentName: ComponentsList.Button,
            title: button.title!,
            url: button.link?.data !== null ? button.link!.data!.attributes?.slug : button.externalUrl,
            description: button.description,
            image: {
                name: button.image?.data?.attributes?.name ?
                    button.image?.data?.attributes?.name
                    :
                    '',
                url: button.image?.data?.attributes?.url ?
                    import.meta.env.STRAPI_URL.concat(<string>button.image?.data?.attributes?.url)
                    :
                    ''
            },
            buttonText: button.buttonText
        }
    }
}