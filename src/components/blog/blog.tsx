import { cn, getReadingTime } from '@/lib/utils';

import { format } from 'date-fns';
import { CalendarDays, Clock, Dot, Layers3, List, Minus, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { IBlog } from '../../../types';

interface Props extends IBlog {
	isVertical?: boolean;
}

function BlogCard(blog: Props) {
	return (
		<div className={cn('grid gap-4 group', blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2')}>
			<Link href={`/blogs/${blog.slug}`}>
				<div className='relative bg-secondary rounded-md '>
					<Image
						width={650}
						height={235}
						src={blog.image.url}
						alt={blog.title}
						className='px-2 h-[400px] md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale-0 group-hover:grayscale max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
					/>
				</div>
			</Link>

			<div className='flex flex-col space-y-4'>
				{/* Time info */}
				<Link href={`/blogs/${blog.slug}`} className='flex flex-col space-y-4'>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' />
							<p>{getReadingTime(blog.createdAt)} min read</p>
						</div>
					</div>

					{/* Title */}
					<h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>{blog.title}</h2>
					<p className='text-muted-foreground line-clamp-3'>{blog.description}</p>
				</Link>

				{/* Author */}
				<div className='flex flex-col  gap-4'>
					<div className='flex items-center gap-2'>
						<Image src={blog.author.image.url} alt='author' width={30} height={30} className='object-cover rounded-sm' />
						<p>by {blog.author.name}</p>
					</div>
					{/* <Dot /> */}
					<div className='flex items-center gap-2 mt-3'>
						<Link href={`/tags/${blog.tag.slug}`}>
							<Badge variant={'secondary'} role='button' className='py-2 rounded-md'>
								<Tag className='w-3 h-3 me-2' />
								{blog.tag.name}
							</Badge>
						</Link>
						{/* <Dot /> */}
						<Link href={`/category/${blog.category.slug}`}>
							<Badge variant={'secondary'} role='button' className='py-2 rounded-md'>
								<Layers3 className='w-3 h-3 me-2' />
								{blog.category.name}
							</Badge>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
