import type { Component } from "../../abstract/component.interface.ts";
import type {BannerCard} from "./banner5050.mapping.ts";

export interface Banner5050 extends Component {
    cards: BannerCard[]
}