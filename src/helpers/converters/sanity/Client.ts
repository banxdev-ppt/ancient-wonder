import { createClient, type ClientConfig, type SanityClient } from '@sanity/client';

const sanityConfig: ClientConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID ?? 'x5i3r804',
  dataset: import.meta.env.VITE_SANITY_DATASET ?? 'ancientwonder',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION ?? 'v2025-07-10',
  useCdn: true,
  perspective: 'published' as const,
};

export const client: SanityClient = createClient(sanityConfig);
