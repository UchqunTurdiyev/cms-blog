import request, { gql } from 'graphql-request';
import { IBlog } from '../types';
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

export const getDetailedBlog = async (slug: string) => {
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
};
