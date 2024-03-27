import AuthorCard from '@/components/card/author';
import { Dot, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getAuthors } from '../../../../service/author.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About us',
};

async function AboutPage() {
	const authors = await getAuthors();
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>About</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>About</p>
				</div>
			</div>
			<h1 className='text-center text-3xl font-creteRound'>
				Resina art maxsulotlari <br /> Biz {"O'zbekiston bo'yicha yetkazib beramiz"}. Darslarimiz online {"o'tiladi"}
			</h1>

			<div className='grid grid-cols-4 gap-4 min-h-96 mt-6'>
				<div className='col-span-2 max-md:col-span-4 relative h-80'>
					<Image src={'/about/01.webp'} alt='about' fill className='rounded-md object-cover' />
				</div>
				<div className='h-80 self-end relative max-md:col-span-2 max-md:h-72'>
					<Image src={'/about/05.webp'} alt='about' fill className='rounded-md object-cover' />
				</div>
				<div className='relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72'>
					<Image src={'/about/03.jpg'} alt='about' fill className='rounded-md object-cover' />
				</div>
			</div>

			<div className='max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground'>
				<p>
					Maxsulotlarimiz pishiq mustahkam tezda sinib ketmaydi, istalgan {"ko'rishishda"} yasash mumkin, gullar toshlar bilan
					bezash imkoni bor
				</p>
				<p>
					Juda mustaxkam va ajoyib stollar yasash imkoni bor, agar shunda hunarga ega bolishni istasangiz bizga murojat
					qilishingiz mumkin darslarimiz sifatli va barcha savollarga javob olasiz ozingiz maxsulot yasab sotguningizgacha biz
					sizga yordam beramiz.
				</p>
			</div>

			<h2 className='text-center text-4xl section-title font-creteRound my-12'>
				<span>Our writers</span>
			</h2>

			<div className='flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center'>
				{authors.map(c => (
					<AuthorCard key={c.name} {...c} />
				))}
			</div>
		</div>
	);
}

export default AboutPage;
