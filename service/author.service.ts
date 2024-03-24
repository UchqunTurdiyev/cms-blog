import request, { gql } from 'graphql-request';
import { IAuthors, IBlog } from '../types';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getAuthors = async () => {
	const query = gql`
		query Assets {
			authors {
				bio
				name
				image {
					url
				}
				blog {
					id
				}
				id
			}
		}
	`;

	const { authors } = await request<{ authors: IAuthors[] }>(graphqlAPI, query);
	return authors;
};

export const getDetailedAuthors = async (id: string) => {
	const query = gql`
		query Assets($id: ID) {
			author(where: { id: $id }) {
				name
				bio
				image {
					url
				}
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
			}
		}
	`;

	const { author } = await request<{ author: IAuthors }>(graphqlAPI, query, { id });
	return author;
};
