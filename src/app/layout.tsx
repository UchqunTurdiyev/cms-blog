import type { Metadata } from 'next';
import { Inter, Work_Sans, Crete_Round } from 'next/font/google';
import './globals.css';
import { ChildProps } from '../../types';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });
const createRound = Crete_Round({ weight: ['400'], subsets: ['latin'], variable: '--font-createRound' });
const workSans = Work_Sans({ weight: ['500', '600'], subsets: ['latin'], variable: '--font-workSans' });

export const metadata: Metadata = {
	metadataBase: new URL('https://cms-blog-uchqun007'),
	title: 'Dasturlashga oid maqolalar',
	description: 'Web dasturlash va pyton uchun ajoib maqolalar',
	authors: [{ name: 'Uchqun Turdiyev', url: 'https//uchqun007.com' }],
	icons: { icon: '/icons.png' },
	keywords:
		'uchqun turdiyev, dasturlashga oid maqolalar, it maqolalar, javascript, reactjs. nextjs, uchqun, dasturlash kurslari, it, dasturlashga oid darslar, reactjs uzbek tilida, nextjs, bepul dasturlash, dasturlash darslari, dasturchi, developer, javascript, tailwindcss, tailwindcss darlasri, shadcn.ui darslari, hygraphql darsalri, hygraphql, IT loyihalar uzbek tililda, samarqand, samarqandda dasturlash',
	openGraph: {
		title: 'Uchqun Turdiyev | Dastulash kurslari',
		description: 'Web dasturlash va pyton uchun ajoib maqolalar',
		type: 'website',
		locale: 'en_EN || uz_UZ',
		images: '/nj.png',
		countryName: 'Uzbekistan',
		siteName: 'https://cms-blog-uchqun007',
		emails: 'uchqundev@gmail.com',
	},
};

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${createRound.variable} ${workSans.variable} overflow-x-hidden`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<NextTopLoader />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	);
}
