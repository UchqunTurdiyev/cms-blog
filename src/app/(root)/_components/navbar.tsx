import Link from 'next/link';
import React from 'react';
import { navLink } from '../../../../constants';
import { Search } from 'lucide-react';
import ModeToggle from '@/components/shared/mode-toggle';
import GlobalSearch from './global-search';

function Navbar() {
	return (
		<div className='h-20 backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-20 w-full flex items-center justify-between'>
				{/* Logo */}
				<Link href={'/'} className='text-4xl font-createRound'>
					Uchqun
				</Link>
				{/* Nav links */}
				<div className='gap-2 hidden md:flex'>
					{navLink.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className='hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors'
						>
							{nav.name}
						</Link>
					))}
				</div>

				<GlobalSearch />
				<ModeToggle />
			</div>
		</div>
	);
}

export default Navbar;
