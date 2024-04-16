import type {Mapping} from "../../abstract/component.mapping.ts";
import type {ButtonMapping} from "../button/button.mapping.ts";
import type {ButtonModel} from "../button/button.model.ts";

export type BannerCard = {
    image?: { url: string },
    title: string,
    description: string,
    button: ButtonMapping | ButtonModel
}
export interface Banner5050Mapping extends Mapping {
    cards: BannerCard[]
}