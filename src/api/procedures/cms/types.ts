export type Page = {
    title: string,
    slug: string,
    lang: string,
    components: (BannerCards|BannerTiles|BannerVideo|Header|PageTitle)[]
}


export enum Components {
    BannerCards = 'BannerCards',
    BannerTiles = 'BannerTiles',
    BannerVideo = 'BannerVideo',
    Header = 'Header',
    PageTitle = 'PageTitle',
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

export type Image ={
    name: string,
    url: string
}

export type Button = {
    title: string,
    url: string,
    description?: string,
    type: ButtonTypes,
    color: ButtonColors,
    image: Image
}

export enum ButtonColors {
    DEFAULT = 'default',
    MARKED = 'marked'
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

export type PageTitle = {
    componentName: Components.PageTitle,
    title: string
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
