import {getHeaderDrupal} from '@trpc-procedures/cms/creators/page.ts';

export type BreadcrumbItem = {
    text: string;
    href: string;
}

export async function getBreadCrumbsDrupal(slug: string, ssr:boolean){
    // Remove first slash if not SSR slug
    let fullSlug = ssr? `/${slug}` : slug;
    const header = await getHeaderDrupal();
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
            let lastIndex = fullSlug.lastIndexOf("/");
            if (lastIndex !== -1) {
                fullSlug = fullSlug.substring(0, lastIndex);
            }
        }
    }

    breadCrumbs = breadCrumbs.reverse();
    if(breadCrumbs.length-1>0) breadCrumbs[breadCrumbs.length-1].href = '';
    return breadCrumbs;
}