import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const novels = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/novels',
	}),
	schema: z.object({
		title: z.string(),
		work: z.string(),
		workId: z.string(),
		episode: z.number(),
		date: z.coerce.date(),
		draft: z.boolean().default(true),
	}),
});

const works = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/works',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		genre: z.string(),
		status: z.string(),
		order: z.number(),
		draft: z.boolean().default(true),
	}),
});

const diary = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/diary',
	}),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		type: z.enum(['short', 'long']),
		summary: z.string().optional(),
		draft: z.boolean().default(true),
	}),
});

export const collections = {
	novels,
	works,
	diary,
};