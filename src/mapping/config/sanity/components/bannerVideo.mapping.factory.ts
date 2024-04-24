import type {BannerVideoMapping} from "src/models/components/bannerVideo/bannerVideo.mapping.ts";
import {toHTML} from '@portabletext/to-html'
import {MappingFactory} from "../../../abstract/mapping.factory.ts";
import type {BannerVideo} from 'src/types/sanity/sanity.types.ts';

export class bannerVideoMappingFactory extends MappingFactory {

    createMapping(component: BannerVideo): BannerVideoMapping {
        const description = toHTML(component.description!);
        return {
            description,
            title: component.title!,
            url: component.video!.id!
        }
    }
}