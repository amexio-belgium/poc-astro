import type {Mapping} from "../../abstract/component.mapping.ts";

export interface BannerVideoMapping extends Mapping {
    description: string;
    title: string;
    url: string;
}