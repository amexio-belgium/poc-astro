import type { ButtonMapping } from "./button.mapping.ts";
import type { Button } from "./button.interface.ts";
import {ComponentsList} from "../../super/components.type.ts";
import {ButtonColors, type Image} from '@trpc-procedures/cms/types.ts';

export class ButtonModel implements Button {
    componentName = ComponentsList.Button;
    title: string;
    url: string;
    description?: string;
    color?: ButtonColors;
    image?: Image;
    buttonText?: string

    constructor (button: ButtonMapping) {
        this.title = button.title;
        this.url = button.url;
        this.buttonText = button.text;
        this.description = button.description;
        this.color = button.color;
        this.image = button.image;
    }
}