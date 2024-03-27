import BgArrow from '@/components/shared/bg-arrow';
import { getBlogs } from '../../../../service/blog.service';
import BlogCard from '@/components/blog/blog';

async function HomePage() {
	const blogs = await getBlogs();

	return (
		<div className='w-full max-sm:overflow-x-hidden'>
			<div className='relative min-h-[60vh] flex items-center justify-center'>
				<h1 className='text-2xl md:text-4xl lg:text-5xl font-creteRound text-center max-w-3xl mx-auto'>
					Resina art mahsulotlariga ega {"bo'ling"}, mahsulot yasashni {"o'rganing "}
				</h1>
				<BgArrow />
			</div>
			<h2 className='text-center text-4xl section-title font-creteRound'>
				<span>Resina art products </span>
			</h2>

			<div className='flex flex-col space-y-24 mt-24'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
