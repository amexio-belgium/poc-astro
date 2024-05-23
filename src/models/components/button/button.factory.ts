import {ComponentFactory} from "../../abstract/component.factory.ts";
import type {ButtonMapping} from "./button.mapping.ts";
import type {Button} from "./button.interface.ts";
import {ButtonModel} from "./button.model.ts";

export class ButtonFactory extends ComponentFactory {
    public createComponent(mapping: ButtonMapping): Button {
        return new ButtonModel(mapping);
    }
}