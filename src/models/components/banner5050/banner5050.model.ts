import type {Banner5050Mapping, BannerCard, BannerCardMapping} from "./banner5050.mapping.ts";
import type { Banner5050 } from "./banner5050.interface.ts";
import {ComponentsList} from "../../super/components.type.ts";
import {ButtonFactory} from "../button/button.factory.ts";

export class Banner5050Model implements Banner5050 {
    componentName = ComponentsList.Banner5050;
    cards: BannerCard[];
    constructor (banner5050: Banner5050Mapping) {
        this.cards = banner5050.cards.map((card: BannerCardMapping) => {
            card.button = new ButtonFactory().createComponent(card.button);
            return <BannerCard>card;
        });
    }
}