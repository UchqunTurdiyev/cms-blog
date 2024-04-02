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

export interface IArchive {
	year: string;
	blog: IBlog[];
}

export interface ICategoryAndTag {
	name: string;
	slug: string;
	blog: IBlog[];
}

export interface IGalleries {
	id?: string;
	title: string;
	image: {
		url: string;
	};
	slug?: string;
	number?: number;
}
