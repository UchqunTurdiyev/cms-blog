import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, SeparatorHorizontal } from 'lucide-react';
import Link from 'next/link';
import { navLink } from '../../../../constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { DrawerClose } from '@/components/ui/drawer';

function Mobile() {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger asChild className='flex md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<Link href={'/'}>
					<h1 className='text-4xl font-createRound'>
						Resina <span className='text-red-400'>Art</span>
					</h1>
				</Link>
				<Separator className='my-3' />
				<div className='flex flex-col space-y-3'>
					{navLink.map(nav => (
						<Link
							key={nav.name}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors ',
								pathname === nav.route && 'text-blue-400 bg-blue-400/20'
							)}
						>
							<DrawerClose className='flex items-center gap-2'>
								<nav.icon className='w-5 h-5' /> {nav.name}
							</DrawerClose>
						</Link>
					))}
				</div>{' '}
			</SheetContent>
		</Sheet>
	);
}

export default Mobile;
