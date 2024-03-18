import { blogs } from './../constants/index';
import request, { gql } from 'graphql-request';
import { IBlog } from '../types';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogByTag = async (slug: string) => {
	const query = gql`
		query Assets($slug: String!) {
			tag(where: { slug: $slug }) {
				blog {
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
					image {
						url
					}
					content {
						html
					}
				}
			}
		}
	`;

	const {
		tag: { blogs },
	} = await request<{ tag: { blogs: IBlog[] } }>(graphqlAPI, query, { slug });
	return blogs;
};
