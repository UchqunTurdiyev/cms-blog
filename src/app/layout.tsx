import type { Metadata } from 'next';
import { Inter, Work_Sans, Crete_Round } from 'next/font/google';
import './globals.css';
import { ChildProps } from '../../types';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });
const createRound = Crete_Round({ weight: ['400'], subsets: ['latin'], variable: '--font-createRound' });
const workSans = Work_Sans({ weight: ['500', '600'], subsets: ['latin'], variable: '--font-workSans' });

export const metadata: Metadata = {
	title: 'Dasturlashga oid maqolalar',
	description: 'Web dasturlash va pyton uchun ajoib maqolalar',
};

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${createRound.variable} ${workSans.variable} overflow-x-hidden`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	);
}
