import React from 'react';
import { ChildProps } from '../../../types';
import Navbar from './_components/navbar';
import Footer from './_components/footer';

function Layout({ children }: ChildProps) {
	return (
		<main className='w-full'>
			<Navbar />
			<div className='container'>{children}</div>
			<Footer />
		</main>
	);
}

export default Layout;
