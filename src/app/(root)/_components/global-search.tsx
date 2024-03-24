'use client';
import React, { ChangeEvent, useState } from 'react';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { Loader2, Minus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { popularCategories, popularTags } from '../../../../constants';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { IBlog } from '../../../../types';
import { getSearchBlogs } from '../../../../service/blog.service';
import { debounce } from 'lodash';
import SearchCard from '@/components/card/search';

function GlobalSearch() {
	const [load, setLoad] = useState(false);
	const [blogs, setBlogs] = useState<IBlog[]>([]);

	const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLowerCase();

		if (text && text.length > 2) {
			setLoad(true);
			const data = await getSearchBlogs(text);

			setBlogs(data);
			setLoad(false);
		} else {
			setBlogs([]);
			setLoad(false);
		}
	};

	const debaunceSearch = debounce(handleSearch, 500);

	return (
		<Drawer>
			<DrawerTrigger>
				{' '}
				<div className='flex items-center gap-1 hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors'>
					<span className='hidden md:flex'>Search</span>
					<Search className='w-4 h-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='container max-w-6xl mx-auto py-12'>
					<Input className='bg-secondary' placeholder='Type to Search blog...' onChange={debaunceSearch} />
					{load && <Loader2 className='animate-spin mt-4 mx-auto' />}
					{blogs.length ? <div className='text-2xl font-creteRound mt-8'>{blogs.length} Results found</div> : null}
					<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2'>
						{blogs && blogs.map(blog => <SearchCard key={blog.slug} {...blog} />)}
					</div>
					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex items-center gap-2'>
							<p className='font-createRound text-2xl'>See posts by category</p>
							<Minus />
							<Link href={`/category`} className='text-blue-500 underline'>
								<DrawerClose>See All</DrawerClose>
							</Link>
						</div>
						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(category => (
								<Badge key={category.name} variant={'secondary'}>
									{category.name}
								</Badge>
							))}
						</div>
					</div>
					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex items-center gap-2'>
							<p className='font-createRound text-2xl'>See posts by tags</p>
							<Minus />
							<Link href={`/tags`} className='text-blue-500 underline'>
								<DrawerClose>See All</DrawerClose>
							</Link>
						</div>
						<div className='flex flex-wrap gap-2'>
							{popularTags.map(tags => (
								<Badge key={tags.name} variant={'secondary'}>
									{tags.name}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}

export default GlobalSearch;
