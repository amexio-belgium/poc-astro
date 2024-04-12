import type {Mapping} from "../../abstract/component.mapping.ts";
import type {ButtonMapping} from "../button/button.mapping.ts";

export type BannerCard = {
    image?: { url: string },
    title: string,
    description: string,
    button: ButtonMapping
}
export interface Banner5050Mapping extends Mapping {
    cards: [BannerCard, BannerCard]
}