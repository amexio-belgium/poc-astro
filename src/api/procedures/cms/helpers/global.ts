import type {StrapiMenuItem} from '@trpc-procedures/cms/types.ts';
import {getHeaderDrupal, getHeaderStrapi, getHeaderStrapiFlat} from '@trpc-procedures/cms/creators/header.ts';

export type BreadcrumbItem = {
    text: string;
    href: string;
}

export async function getBreadCrumbsDrupal(lang:string, slug: string, ssr: boolean){
    // Remove first slash if not SSR slug
    let fullSlug = ssr? `/${slug}` : slug;
    const header = await getHeaderDrupal(lang);
    let breadCrumbs: BreadcrumbItem[] = [];
    
    let foundAll = false;
    while(!foundAll){
        const element = header.elements.find(
            (element)=> element.href === `${fullSlug}`
        )
        if(!element){
            foundAll = true;
        } else {
            breadCrumbs.push(
                {
                    text: element.attributes.title!,
                    href: `/drupal${ssr ? '/ssr':''}${element.href}`,
                }
            );
            const lastIndex = fullSlug.lastIndexOf("/");
            if (lastIndex !== -1) {
                fullSlug = fullSlug.substring(0, lastIndex);
            }
        }
    }

    breadCrumbs = breadCrumbs.reverse();
    if(breadCrumbs.length-1>0) breadCrumbs[breadCrumbs.length-1].href = '';
    return breadCrumbs;
}

function findParents(menuItems: StrapiMenuItem[], targetUrl: string, parents: StrapiMenuItem[] = []): StrapiMenuItem[] | null {
    for (const menuItem of menuItems) {
        if (menuItem.attributes.url === targetUrl) {
            return parents;
        }

        if (menuItem.attributes.children.data.length > 0) {
            const foundParents = findParents(menuItem.attributes.children.data, targetUrl, parents.concat(menuItem));

            if (foundParents !== null) {
                return foundParents;
            }
        }
    }

    return null;
}


export async function getBreadCrumbsStrapi(slug: string, lang: string, ssr: boolean){
    let fullSlug = slug;
    if(slug.startsWith('en/')||slug.startsWith('nl/')){
        fullSlug = slug.split("/")[1]
    }
    const header = await getHeaderStrapi(lang);
    
    const breadCrumbs: BreadcrumbItem[] = [];
    
    const menuItems: StrapiMenuItem[] = header.data.attributes.items.data;
    const items = findParents(menuItems, `/${fullSlug}`);
    
    const mainItemData = await getHeaderStrapiFlat(lang);
    const mainItem = mainItemData.data.attributes.items.data.find((item)=> item.attributes.url === `/${fullSlug}`);
    if(mainItem) items?.push(mainItem);

    items?.forEach((item)=>{
        breadCrumbs.push({
            text: item.attributes.title,
            href: `/strapi/${ssr? 'ssr/':''}${lang}${item.attributes.url}`,
        })
    })
    return breadCrumbs;
}

export function getUrl(url: string){
    if(url.startsWith('/drupal/ssr/')){
        return '/drupal/ssr';
    }
    else if(url.startsWith('/drupal/')){
        return '/drupal';
    }
    else if(url.startsWith('/strapi/ssr/nl/')){
        return '/strapi/ssr/nl/';
    }
    else if(url.startsWith('/strapi/ssr/en/')){
        return '/strapi/ssr/en/';
    }
    else if(url.startsWith('/strapi/en/')){
        return '/strapi/en/';
    }
    else if(url.startsWith('/strapi/nl/')){
        return '/strapi/nl/';
    }
    else {
        return '/strapi'
    }
}
