import request, { gql } from 'graphql-request';
import { IArchive, IBlog } from '../types';
import { cache } from 'react';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
	const query = gql`
		query Assets {
			blog {
				content {
					html
					markdown
					raw
					text
				}
				createdAt
				description
				title
				slug
				image {
					url
				}
				tag {
					name
					slug
				}
				category {
					name
					slug
				}
				author {
					name
					image {
						url
					}
				}
			}
		}
	`;

	const { blog } = await request<{ blog: IBlog[] }>(graphqlAPI, query);
	return blog;
};

export const getDetailedBlog = cache(async (slug: string) => {
	const query = gql`
		query Assets($slug: String!) {
			blogs(where: { slug: $slug }) {
				author {
					name
					image {
						url
					}
					bio
					id
				}
				createdAt
				title
				tag {
					name
					slug
				}
				category {
					name
					slug
				}
				image {
					url
				}
				content {
					html
				}
			}
		}
	`;

	const { blogs } = await request<{ blogs: IBlog }>(graphqlAPI, query, { slug });
	return blogs;
});

export const getSearchBlogs = async (title: string) => {
	const query = gql`
		query Assets($title: String!) {
			blog(where: { title_contains: $title }) {
				title
				image {
					url
				}
				id
			}
		}
	`;
	const { blog } = await request<{ blog: IBlog[] }>(graphqlAPI, query, { title });
	return blog;
};

export const getArchiveBlog = async () => {
	const query = gql`
		query Assets {
			blog(where: { archive: true }) {
				createdAt
				title
				slug
			}
		}
	`;

	const { blog } = await request<{ blog: IBlog[] }>(graphqlAPI, query);
	const filteredBlog = blog.reduce((acc: { [year: string]: IArchive }, car: IBlog) => {
		const year = car.createdAt.substring(0, 4);
		if (!acc[year]) {
			acc[year] = { year, blog: [] };
		}
		acc[year].blog.push(car);
		return acc;
	}, {});
	const results: IArchive[] = Object.values(filteredBlog);
	return results;
};
