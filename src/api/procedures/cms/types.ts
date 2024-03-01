export type Page = {
    title: string,
    slug: string,
    components: (BannerCards|BannerVideo|Header|PageTitle)[]
}

export enum Components {
    BannerCards = 'BannerCards',
    BannerVideo = 'BannerVideo',
    Header = 'Header',
    PageTitle = 'PageTitle',
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
    componentName: Components.BannerCards,
    cards: Button[]
}

export type PageTitle = {
    componentName: Components.PageTitle,
    title: string
}