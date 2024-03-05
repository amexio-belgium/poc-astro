import {procedure as publicProcedure, router} from '@trpc-api/trpc.ts';
import z from 'zod';
import {
    getAllPagesDrupal,
    getAllPagesStrapi, 
    getPageDrupal, 
    getPageStrapi
} from '@trpc-procedures/cms/creators/page.ts';
import type {Page} from '@trpc-procedures/cms/types.ts';
export const getPageInputSchema = z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
});

export type GetPageInput = z.infer<typeof getPageInputSchema>;


export const CMSRouter = router({
    getAllPagesDrupal: publicProcedure
        .query(() => getAllPagesDrupal()),
    getAllPagesStrapi: publicProcedure
        .query(() => getAllPagesStrapi()),
    getPageDrupal: publicProcedure
        .input(getPageInputSchema)
        .query(({input}) => getPageDrupal({ input })),
    getPageStrapi: publicProcedure
        .input(getPageInputSchema)
        .query(({input}) => getPageStrapi({ input }))
});
