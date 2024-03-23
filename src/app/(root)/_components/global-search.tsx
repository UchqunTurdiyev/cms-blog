import React from 'react';

import { Button } from '@/components/ui/button';
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
import { Minus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { popularCategories, popularTags } from '../../../../constants';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

function GlobalSearch() {
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
					<Input className='bg-secondary' placeholder='Type to Search blog...' />
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
