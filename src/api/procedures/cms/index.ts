import {procedure as publicProcedure, router} from '@trpc-api/trpc.ts';
import z from 'zod';
import {
    getAllPagesDrupal,
    getAllPagesStrapi, 
    getPageDrupal, 
    getPageStrapi
} from '@trpc-procedures/cms/page.ts';
import type {Page} from '@trpc-procedures/cms/types.ts';
export const getPageInputSchema = z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
});

export type GetPageInput = z.infer<typeof getPageInputSchema>;

export async function getAllPages(): Promise<Page[]>{
    const strapiPages = await getAllPagesStrapi();
    const drupalPages = await getAllPagesDrupal();
    return strapiPages.concat(drupalPages);
}

export async function getPage({input}: { input: GetPageInput; }): Promise<Page|null|undefined>{
    const strapiPage = await getPageStrapi({input});
    const drupalPage = await  getPageDrupal({input})
    if(!strapiPage && !drupalPage){
        return null;
    }
    else{
        if(strapiPage) return strapiPage;
        if(drupalPage) return drupalPage;
    }
}

export const CMSRouter = router({
    getPages: publicProcedure
        .query(() => getAllPages()),
    getPage: publicProcedure
        .input(getPageInputSchema)
        .query(({input}) => getPage({ input }))
});
