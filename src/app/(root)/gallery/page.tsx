import { Dot, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { getGallery } from '../../../../service/gallery.service';
import Gallery from '@/components/gallery/Gallery';
import { IGalleries } from '../../../../types';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'All Gallery',
};

export default async function GalleryPage() {
	const gallery = await getGallery();
	return (
		<div>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Gallery</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Gallery</p>
				</div>
			</div>
			<div className='grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2'>
				{gallery.map(item => (
					<Gallery {...item} key={item.id} />
				))}
			</div>
		</div>
	);
}
