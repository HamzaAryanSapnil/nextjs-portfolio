export interface IBlog{
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    category: string;
    tags: string[];
    authorId?: string;
    featuredImage: string;
    createdAt: string;
    updatedAt: string;
}