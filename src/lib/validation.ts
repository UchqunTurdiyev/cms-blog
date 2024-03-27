'use client';

import { z } from 'zod';

export const contactSchema = z.object({
	message: z.string().min(10),
	// email: z.string().email(),
	number: z.string().min(7),
	name: z.string().min(2),
});
