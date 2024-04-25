import type {Mapping} from "../../abstract/component.mapping.ts";
import {ButtonColors, type Image} from '@trpc-procedures/cms/types.ts';

export interface ButtonMapping extends Mapping {
    title: string,
    url: string,
    description?: string,
    color?: ButtonColors,
    image?: Image,
    buttonText?: string
}