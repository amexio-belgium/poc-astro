import {procedure as publicProcedure, router} from '@trpc-api/trpc.ts';
import z from 'zod';
import {
    getAllPagesDrupal,
    getAllPagesStrapi, 
    getPageDrupal, 
    getPageStrapi
} from '@trpc-procedures/cms/creators/page.ts';
export const getPageInputSchema = z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
});

export type GetPageInput = z.infer<typeof getPageInputSchema>;

export const getPageLangSchema = z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
});

export type GetPageLang = z.infer<typeof getPageLangSchema>;


export const CMSRouter = router({
    getAllPagesDrupal: publicProcedure
        .query(() => getAllPagesDrupal()),
    getAllPagesStrapi: publicProcedure
        .query(() => getAllPagesStrapi()),
    getPageDrupal: publicProcedure
        .input(z.object({
            slug: getPageInputSchema,
            lang: getPageLangSchema,
        }))
        .query((opts) => getPageDrupal({slug: opts.input.slug, lang: opts.input.lang})),
    getPageStrapi: publicProcedure
        .input(z.object({
            slug: getPageInputSchema,
            lang: getPageLangSchema,
        }))
        .query((opts) => getPageStrapi({input: opts.input.slug, lang: opts.input.lang})),
});
