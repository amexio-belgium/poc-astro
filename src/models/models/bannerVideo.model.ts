/* import {Components, type BannerVideo} from '@trpc-procedures/cms/types.ts';
import type {SharedBannerVideoComponent} from 'src/types/strapi/generated.schemas.ts';
import type {
    MediaRemoteVideo,
    ParagraphVideobanner
} from 'src/types/drupal/resolvers-types.ts';

export function createBannerVideoStrapi(component: SharedBannerVideoComponent) {
    return {
        componentName: Components.BannerVideo,
        title: component.title,
        description: component.description,
        url: component.videoUrl
    } as BannerVideo;
}

export function createBannerVideoDrupal(component: ParagraphVideobanner) {
    const videoUrl = component.videoUrl as MediaRemoteVideo;
    return {
        componentName: Components.BannerVideo,
        title: component.titel,
        description: component.beschrijving.value,
        url: videoUrl?.mediaOembedVideo
    } as BannerVideo;
}

 */

import type { BannerVideo } from "../structure/bannerVideo.interface.ts";

export class BannerVideoModel implements BannerVideo {
    componentName = "bannerVideo";

    constructor (description: string, title: string, url: string) {
        this.description = description;
        this.title = title;
        this.url = url;
    }

    getVideoId() {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = this.url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    }
}