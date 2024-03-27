import type { Metadata } from 'next';
import { Inter, Work_Sans, Crete_Round } from 'next/font/google';
import './globals.css';
import { ChildProps } from '../../types';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';
// 'uchqun turdiyev, dasturlashga oid maqolalar, it maqolalar, javascript, reactjs. nextjs, uchqun, dasturlash kurslari, it, dasturlashga oid darslar, reactjs uzbek tilida, nextjs, bepul dasturlash, dasturlash darslari, dasturchi, developer, javascript, tailwindcss, tailwindcss darlasri, shadcn.ui darslari, hygraphql darsalri, hygraphql, IT loyihalar uzbek tililda, samarqand, samarqandda dasturlash',

const inter = Inter({ subsets: ['latin'] });
const createRound = Crete_Round({ weight: ['400'], subsets: ['latin'], variable: '--font-createRound' });
const workSans = Work_Sans({ weight: ['500', '600'], subsets: ['latin'], variable: '--font-workSans' });

export const metadata: Metadata = {
	metadataBase: new URL('https://www.resina-art.uz'),
	title: 'Resina art',
	description: 'Resina art, smala bilan ishlash productlar va darsliklar',
	authors: [{ name: 'Uchqun Turdiyev', url: 'https//uchqun007.com' }],
	icons: { icon: '/fw.png' },
	keywords:
		'decor, resina art, resina, xadicha, sovg\'alar, zamonaviy sovg\'a, kreativ sovg\'a, noodatiy sovg\'a, smala, uy bezaklari, islomiy sovg\'a, kartina uy uchun, soat, devoriy rasm, devoriy kartina, resina art darslari, xadicha decor, smala darslari, soat yasash, stol yasash, lavx, lavx yasash,',
	openGraph: {
		title: 'Xadicha | Resina art',
		description: "Resina art, stol stul, lavx, soat, va yana shunga oxshagan narsalrni sotib olish yoki o'ganish uchun",
		type: 'website',
		locale: 'en_EN || uz_UZ',
		images: '/lb.png',
		countryName: 'Uzbekistan',
		siteName: 'https://www.resina-art.uz',
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
