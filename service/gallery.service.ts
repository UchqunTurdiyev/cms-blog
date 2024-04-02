import request, { gql } from 'graphql-request';
import { IGalleries } from '../types';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getGallery = async () => {
	const query = gql`
		query Assets {
			galleries {
				id
				number
				slug
				title
				image {
					url
				}
			}
		}
	`;

	const { galleries } = await request<{ galleries: IGalleries[] }>(graphqlAPI, query);
	return galleries;
};
