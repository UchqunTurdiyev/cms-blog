import request, { gql } from 'graphql-request';
import { IBlog, ICategoryAndTag } from '../types';
import { cache } from 'react';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getTags = async () => {
	const query = gql`
		query Assets {
			tags {
				name
				slug
			}
		}
	`;

	const { tags } = await request<{ tags: ICategoryAndTag[] }>(graphqlAPI, query);
	return tags;
};

export const getBlogByTag = cache(async (slug: string) => {
	const query = gql`
		query Assets($slug: String!) {
			tag(where: { slug: $slug }) {
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

	const { tag } = await request<{ tag: { blog: IBlog[]; name: string } }>(graphqlAPI, query, { slug });
	return tag;
});
