import { Dot, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { getTags } from '../../../../service/tag.service';
import CategoiresTagCard from '@/components/card/categoires-tag';

async function Page() {
	const tags = await getTags();
	console.log(tags);

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>{/* <span>{category.name}</span> */} Tag</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Categories</p>
				</div>
			</div>
			<div className='mt-16'>
				{tags.map(item => (
					<CategoiresTagCard key={item.slug} {...item} type='tag' />
				))}
			</div>
		</div>
	);
}

export default Page;
