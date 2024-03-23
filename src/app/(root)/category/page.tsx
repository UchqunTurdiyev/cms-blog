import { Dot, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import CategoiresTagCard from '@/components/card/categoires-tag';
import { getCategories } from '../../../../service/category.service';

async function Page() {
	const category = await getCategories();

	console.log('Hello ' + category);

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span></span> Category
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Categories</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24'>
				{category.map(item => (
					// eslint-disable-next-line
					<CategoiresTagCard item={item.slug} {...item} type='categories' />
				))}
			</div>
		</div>
	);
}

export default Page;
