export interface ChildProps {
	children: React.ReactNode;
}
export interface IBlog {
	title: string;
	description: string;
	author: IAuthors;
	category: ICategoryAndTag;
	tag: ICategoryAndTag;
	bio?: string;
	id?: number;
	image: { url: string };
	createdAt: string;
	slug: string;
	content: { html: string };
}

export interface IAuthors {
	image: {
		url: string;
	};
	name: string;
	bio: string;
	blog: IBlog[];
	id: string;
}

export interface ICategoryAndTag {
	name: string;
	slug: string;
}
