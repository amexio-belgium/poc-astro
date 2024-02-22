import { initTRPC } from '@trpc/server';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const tr = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const {
    router, procedure
} = tr;
