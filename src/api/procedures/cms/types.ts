export type Page = {
    title: string,
    slug: string,
    lang: string,
    hideDefaultHeader: boolean,
    components: ComponentsUnion[]
}
export type ComponentsUnion = Banner5050|BannerCards|BannerTiles|BannerVideo|DefaultHeader|Header|FullWidthBanner|Text|JobType|Iframe;

export type JobType = {
    componentName: Components.Job
}

export type Job = {
    jobTitle: string,
    externalTitle: string,
    externalJobDescription: string,
}

export type JobsResponse = {
    d: {results: Job[]}
}

export enum Components {
    BannerCards = 'BannerCards',
    BannerTiles = 'BannerTiles',
    BannerVideo = 'BannerVideo',
    Header = 'Header',
    DefaultHeader = 'DefaultHeader',
    FullWidthBanner = 'FullWidthBanner',
    Text = 'Text',
    Banner5050 = 'Banner5050',
    Job = 'Job'
}

export enum CMSType {
    DRUPAL= 'DRUPAL',
    STRAPI = 'STRAPI'
}

export type Header = {
    componentName: Components.Header,
    title: string,
    buttons: Button[],
    image: Image
}

export type Banner5050 = {
    componentName: Components.Banner5050,
    buttons: [Button, Button],
}

export type Text = {
    componentName: Components.Text,
    text: string,
}

export enum Alignment {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

export type Iframe = {
    url: string,
}

export type FullWidthBanner = {
    componentName: Components.FullWidthBanner,
    alignment: Alignment,
    title: string,
    description?: string,
    buttonText: string,
    image: string,
    link: string
}

export type FullWidthBannerText = {
    componentName: Components.FullWidthBanner,
    alignment: Alignment,
    title: string,
    description?: string,
    buttonText: string,
    image: string,
    link: string
}

export type DefaultHeader = {
    componentName: Components.DefaultHeader,
    title: string,
    description: string
}

export type Image ={
    name: string,
    url: string
}

export type Button = {
    title: string,
    url: string,
    description?: string,
    color?: ButtonColors,
    image?: Image,
    buttonText?: string
}

export enum ButtonColors {
    DEFAULT = 'Default',
    HIGHLIGHT = 'Highlight'
}

export enum ButtonTypes {
    CARD = 'card',
    TILE = 'tile',
    ICON = 'icon'
}

export type BannerVideo = {
    componentName: Components.BannerVideo,
    title: string,
    description: string,
    url: string
}

export type BannerCards = {
    CMSType: CMSType,
    componentName: Components.BannerCards,
    cards: Button[]
}

export type BannerTiles = {
    CMSType: CMSType,
    componentName: Components.BannerTiles,
    tiles: Button[]
}

export type StrapiMenuChildItem = {
    id: number;
    attributes: {
        order: number;
        title: string;
        url: string;
        target: null | string;
        createdAt: string;
        updatedAt: string;
        children: {
            data: StrapiMenuChildItem[];
        };
    };
}

export type StrapiMenuItem = {
    id: number;
    attributes: {
        order: number;
        title: string;
        url: string;
        target: null | string;
        createdAt: string;
        updatedAt: string;
        children: {
            data: StrapiMenuChildItem[];
        };
    };
}

export type StrapiMenuData = {
    id: number;
    attributes: {
        title: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        items: {
            data: StrapiMenuItem[];
        };
    };
}

export type StrapiMenuResponse = {
    data: {
        id: number;
        attributes: {
            title: string;
            slug: string;
            createdAt: string;
            updatedAt: string;
            items: {
                data: StrapiMenuItem[];
            };
        };
        meta: Record<string, unknown>;
    };
}
