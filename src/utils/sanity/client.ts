import { createClient } from "@sanity/client"

export const client = createClient({
    projectId: import.meta.env.SANITY_PROJECTID,
    dataset: import.meta.env.SANITY_DATASET,
    apiVersion: import.meta.env.SANITY_DATASET,
    // Set to `true` for production environments
    useCdn: import.meta.env.SANITY_USECDN,
})