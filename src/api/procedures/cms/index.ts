import {procedure as publicProcedure, router} from '@trpc-api/trpc.ts';
import z from 'zod';
import {getAllPages} from '@trpc-procedures/cms/page.ts';
import type {Page} from '@trpc-procedures/cms/types.ts';

export const getPageInputSchema = z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
});

export type GetPageInput = z.infer<typeof getPageInputSchema>;

async function getPage({input}: { input: GetPageInput; }): Promise<Page|null>{
    console.log(input);
    // const response = await getPages(input).catch((err)=>{console.log(err);})
    //
    //
    // if(response && response.data && response.data[0]){
    //     const dataObject = response.data[0];
    //     let page:Page = {title: dataObject.attributes!.slug, components: []}
    //     dataObject.attributes?.content?.forEach((component: PageContentItem)=>{
    //         const astroComponent = getComponentFromString(component);
    //         if(astroComponent){
    //             page.components.push(astroComponent);
    //         }
    //     })
    //     return page;
    // }
    return null
}

export const CMSRouter = router({
    getPages: publicProcedure
        .query(() => getAllPages()),
    getPage: publicProcedure
        .input(getPageInputSchema)
        .query(({input}) => getPage({ input }))
});
