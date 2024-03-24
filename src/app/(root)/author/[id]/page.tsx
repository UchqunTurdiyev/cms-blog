import React from 'react';
import { getDetailedAuthors } from '../../../../../service/author.service';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import BlogCard from '@/components/blog/blog';

async function Page({ params }: { params: { id: string } }) {
	const author = await getDetailedAuthors(params.id);

	return (
		<div className='max-w-6xl mx-auto pt-36'>
			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image src={author.image.url} alt='author' width='200' height='200' className='rounded-md max-md:self-start' />
				<div className='flex-1 flex flex-col space-y-4'>
					<div className='text-muted-foreground'>
						<span className='font-bold text-white'>{author.blog.length}</span> Published posts
					</div>
					<h2 className='text-3xl font-creteRound'>{author.name}</h2>
					<p className='line-clamp-2 text-muted-foreground max-w-xl'>{author.bio}</p>
				</div>
			</div>
			<h2 className='text-creteRound text-center text-4xl section-title  my-12'>
				<span>Published posts</span>
			</h2>
			<div className='flex flex-col space-y-24 mt-24'>
				{author.blog.map(blog => (
					<BlogCard key={blog.id} {...blog} />
				))}
			</div>
		</div>
	);
}

export default Page;
