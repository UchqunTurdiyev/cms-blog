import React from 'react';
import { getBlogByTag } from '../../../../../service/tag.service';
import { Dot, Home } from 'lucide-react';
import Link from 'next/link';
import BlogCard from '@/components/blog/blog';

export async function generateMeatadata({ params }: { params: { slug: string } }) {
	const tag = await getBlogByTag(params.slug);
	return {
		title: tag.name,
		openGraph: {
			images: tag.blog.map(c => c.image.url),
		},
	};
}

async function Page({ params }: { params: { slug: string } }) {
	const tag = await getBlogByTag(params.slug);

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>{tag.name}</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Tags</p>
				</div>
			</div>
			<div className='mt-16'>
				{tag.blog.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	);
}

export default Page;
