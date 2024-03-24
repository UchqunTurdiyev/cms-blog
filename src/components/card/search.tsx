import Link from 'next/link';
import React from 'react';
import { IBlog } from '../../../types';
import { DrawerClose } from '../ui/drawer';
import Image from 'next/image';
import { CalendarDays } from 'lucide-react';
import { format } from 'date-fns';

function SearchCard(blog: IBlog) {
	console.log(blog);

	return (
		<Link href={`/blogs/${blog.title}`}>
			<DrawerClose className='flex flex-col space-y-2 text-start'>
				<Image
					width={200}
					height={200}
					src={blog.image.url}
					alt={blog.title}
					className='rounded-md shadow-xl dark:shadow-white/5'
				/>
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-4 h-4' />
					{/* <p className='text-sm'>{format(new Date(blog.createdAt), 'MMM dd, YYYY')}</p> */}
				</div>{' '}
			</DrawerClose>
		</Link>
	);
}

export default SearchCard;
