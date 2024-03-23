import { Layers3, Tags } from 'lucide-react';
import React from 'react';
import { ICategoryAndTag } from '../../../types';
import Link from 'next/link';

interface Props extends ICategoryAndTag {
	type: 'categories' | 'tag';
}

const CategoiresTagCard = (item: Props) => {
	return (
		<Link
			href={`/${item.type}/${item.slug}`}
			className='bg-secondary p-4 md:p-8 rounded-md shadow-xl flex items-center gap-4 justify-center hover:bg-secondary/80 transition-colors dark:shadow-white/5'
		>
			{item.type === 'categories' ? <Tags /> : <Layers3 />}
			<h1 className='text-2xl font-creteRound'>{item.name}</h1>
		</Link>
	);
};

export default CategoiresTagCard;
