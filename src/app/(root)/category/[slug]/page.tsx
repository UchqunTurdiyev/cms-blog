import React from 'react';
import { Dot, Home } from 'lucide-react';
import Link from 'next/link';
import BlogCard from '@/components/blog/blog';
import { getBlogByCategory } from '../../../../../service/category.service';

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const category = await getBlogByCategory(params.slug);

	return {
		props: {
			category,
		},
	};
}

async function Page({ category }: { category: any }) {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>{category.name}</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Categoriy</p>
				</div>
			</div>
			<div className='mt-16'>
				{category.blog.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	);
}

export default Page;
