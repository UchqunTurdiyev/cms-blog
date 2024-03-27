'use client';
import { contactSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RawCreateParams, ZodPromise, ZodTypeAny, promise, z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			number: '',
			message: '',
			name: '',
		},
	});

	function onSubmit(values: z.infer<typeof contactSchema>) {
		setIsLoading(true);
		const telegramBotId = process.env.NEXT_PUBLIC_TETELGRAM_BOT_API!;
		const telegramChatId = process.env.NEXT_PUBLIC_TETELGRAM_CHAT_ID!;

		const promise = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'no-cache',
			},
			body: JSON.stringify({
				chat_id: telegramChatId,
				text: `Name: ${values.name}
        Number: ${values.number}
        Message: ${values.message}
        `,
			}),
		})
			.then(() => form.reset()) // success bo'lganda formadagi malumotlarni o'chirish uchun
			.finally(() => setIsLoading(false)); // finnally malumot kelib bo'lganda
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully sent!',
			error: 'Someting went wrong!',
		});
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										className='resize-none h-32'
										placeholder='Ask question or just say Hi'
										{...field}
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='number'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Tel number' {...field} disabled={isLoading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='Your name here' {...field} disabled={isLoading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className='w-fit' size={'lg'} type='submit' disabled={isLoading}>
						<span>Send</span>
						<Send className='w-4 h-4 ml-2' />
					</Button>
				</form>
			</Form>
		</div>
	);
}

export default ContactForm;
