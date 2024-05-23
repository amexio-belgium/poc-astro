import type { ButtonMapping } from "./button.mapping.ts";
import type { Button } from "./button.interface.ts";
import {ComponentsList} from "../../super/components.type.ts";

export class ButtonModel implements Button {
    componentName = ComponentsList.Button;
    url: string;
    text: string;

    constructor (button: ButtonMapping) {
        this.url = button.url;
        this.text = button.text;
    }
}