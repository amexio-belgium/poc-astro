import type {Mapping} from "../../abstract/component.mapping.ts";
import type {Button} from "../button/button.interface.ts";
import type {ButtonMapping} from "../button/button.mapping.ts";

export type BannerCardMapping = {
    image?: { url: string },
    title: string,
    description: string,
    button: ButtonMapping
}
export interface Banner5050Mapping extends Mapping {
    cards: BannerCardMapping[]
}

export interface BannerCard extends Omit<BannerCardMapping, 'button'> {
    button: Button
}