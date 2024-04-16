import type {Banner5050Mapping, BannerCard} from "./banner5050.mapping.ts";
import type { Banner5050 } from "./banner5050.interface.ts";
import {ComponentsList} from "../../super/components.type.ts";
import {ButtonModel} from "../button/button.model.ts";

export class Banner5050Model implements Banner5050 {
    componentName = ComponentsList.Banner5050;
    cards: BannerCard[];
    constructor (banner5050: Banner5050Mapping) {
        this.cards = banner5050.cards.map(card => {
            card.button = new ButtonModel(card.button);
            return card;
        });
    }
}