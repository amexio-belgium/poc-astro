import {Components, type BannerVideo, type Button, CMSType, type BannerTiles} from '@trpc-procedures/cms/types.ts';
import type {SharedBannerVideoComponent} from 'src/types/strapi/generated.schemas.ts';
import type {
    Maybe,
    MediaRemoteVideo,
    MediaUnion,
    ParagraphTeaser,
    ParagraphVideobanner
} from 'src/types/drupal/resolvers-types.ts';
import {getButtonsFromReference} from '@trpc-procedures/cms/helpers/button.ts';

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