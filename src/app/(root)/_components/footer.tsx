'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Mail, Send, User, User2 } from 'lucide-react';
import React, { useState } from 'react';

function Footer() {
	const [active, setActive] = useState(false);
	return (
		<footer className='flex-center py-24 flex-col container max-w-2xl space-y-12'>
			<h1 className='text-4xl max-md:text-2xl font-createRound text-center'>Resina Art</h1>
			<div className='grid max-md:grid-cols-1 grid-cols-3 md:gap-4 w-full'>
				<Button size={'lg'} variant={active ? 'default' : 'outline'} className='max-md:mt-2'>
					<Instagram className='w-4 h-4 me-2' />
					<a href='https://www.instagram.com/smala_onlayn_kurs_onlayn_savdo/'>
						<span>{'Instagram'}</span>
					</a>
				</Button>
				<Button size={'lg'} variant={active ? 'default' : 'outline'} className='max-md:mt-2'>
					<Send className='w-4 h-4 me-2' />
					<a href='https://t.me/+f6u_IKyfiXs5NjFi'>
						<span>{'Telegram'}</span>
					</a>
				</Button>
				<Button size={'lg'} variant={active ? 'default' : 'outline'} className='max-md:mt-2'>
					<Mail className='w-4 h-4 me-2' />
					<a href='mailto:uchqundev@gmail.com'>
						<span>{'Telegram'}</span>
					</a>
				</Button>
			</div>
		</footer>
	);
}

export default Footer;
