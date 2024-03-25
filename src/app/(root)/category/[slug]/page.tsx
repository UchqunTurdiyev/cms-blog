import React from 'react';
import { Dot, Home } from 'lucide-react';
import Link from 'next/link';
import BlogCard from '@/components/blog/blog';
import { getBlogByCategory, getCategories } from '../../../../../service/category.service';

export async function generateMeatadata({ params }: { params: { slug: string } }) {
	const blog = await getBlogByCategory(params.slug);
	return {
		title: blog.name,
		openGraph: {
			images: blog.blog.map(c => c.image.url),
		},
	};
}

async function Page({ params }: { params: { slug: string } }) {
	const category = await getBlogByCategory(params.slug);
	console.log(category);

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
