import request, { gql } from 'graphql-request';
import { IBlog, ICategoryAndTag } from '../types';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getCategories = async () => {
	const query = gql`
		query Assets {
			categories {
				name
				slug
			}
		}
	`;

	const { categories } = await request<{ categories: ICategoryAndTag[] }>(graphqlAPI, query);
	return categories;
};

export const getBlogByCategory = async (slug: string) => {
	const query = gql`
		query Assets($slug: String!) {
			category(where: { slug: $slug }) {
				blog {
					description
					author {
						name
						image {
							url
						}
						bio
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
				name
			}
		}
	`;

	const { category } = await request<{ category: { blog: IBlog[]; name: string } }>(graphqlAPI, query, { slug });
	return category;
};
