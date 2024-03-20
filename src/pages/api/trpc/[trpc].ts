// /pages/api/trpc/[trpc].ts
import {
    router
} from 'src/api/server/trpc.ts';
import type { APIRoute } from 'astro';
import { createContext } from 'src/api/server/context.ts';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const appRouter = router({});

// The Astro API route, handling all incoming HTTP requests.
export const ALL: APIRoute = ({ request }) => fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext
});

export type AppRouter = typeof appRouter;
