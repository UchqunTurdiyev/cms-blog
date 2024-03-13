'use client';
import Link from 'next/link';
import React from 'react';
import { navLink } from '../../../../constants';
import { Search } from 'lucide-react';
import ModeToggle from '@/components/shared/mode-toggle';
import GlobalSearch from './global-search';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Mobile from './mobile';

function Navbar() {
	const pathname = usePathname();
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
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				<div className='flex items-center gap-1'>
					<GlobalSearch />
					<ModeToggle />
					<Mobile />
				</div>
			</div>
		</div>
	);
}

export default Navbar;