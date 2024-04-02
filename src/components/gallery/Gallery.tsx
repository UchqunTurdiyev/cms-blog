'use client';
import Image from 'next/image';
import React from 'react';
import { IGalleries } from '../../../types';
import { getGallery } from '../../../service/gallery.service';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';

export default function Gallery({ id, title, image, number, slug }: IGalleries) {
	return (
		<div>
			<div className='relative overflow-hidden'>
				<Image width={500} height={500} className='w-full h-auto max-w-full rounded-lg relative' src={image.url} alt={title} />
				<div className='w-32 h-56 bg-black/80 absolute bottom-[-80px] right-[-30px] rotate-45'></div>
				<div className='flex flex-col gap-2 absolute bottom-2 right-2'>
					<p className='text-end'>{number}</p>
					<h1>{title}</h1>
				</div>
			</div>
		</div>
	);
}
