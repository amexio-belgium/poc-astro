// /pages/api/trpc/[trpc].ts
import {
    router
} from '@trpc-api/trpc';
import type { APIRoute } from 'astro';
import { createContext } from '@trpc-api/context';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { PokemonRouter } from 'src/api/procedures/pokemons';
import {CMSRouter} from '@trpc-procedures/cms.ts';

const appRouter = router({
    pokemons: PokemonRouter,
    cms: CMSRouter
});

// The Astro API route, handling all incoming HTTP requests.
export const ALL: APIRoute = ({ request }) => fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext
});

export type AppRouter = typeof appRouter;
