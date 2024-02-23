export interface Page {
    title: string,
    components: (ISharedVideoBlock|IPageTitle)[]
}

export enum Components {
    SharedVideoBlock = 'SharedVideoBlock',
    PageTitle = 'PageTitle'
}

export interface ISharedVideoBlock {
    componentName: Components.SharedVideoBlock,
    title: string,
    description: string,
    url: string
}

export interface IPageTitle {
    componentName: Components.PageTitle,
    title: string
}

export interface GetPagesResult {
    data?: (DataEntity)[] | null;
    meta: Meta;
}
export interface DataEntity {
    id: number;
    attributes: Attributes;
}
export interface Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    Title: string;
    slug: string;
    content?: (ContentEntity)[] | null;
    localizations: Localizations;
}
export interface ContentEntity {
    id: number;
    __component: string;
    video: string;
    title: string;
    description: string;
}
export interface Localizations {
    data?: (null)[] | null;
}
export interface Meta {
    pagination: Pagination;
}
export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
