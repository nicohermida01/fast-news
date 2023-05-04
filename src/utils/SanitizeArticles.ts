import { IArticle } from '@/interfaces/article.interface'

export const sanitizeArticles = (articles: IArticle[]) => {
	return articles.filter(checkProperties)
}

const checkProperties = (article: IArticle) => {
	return (
		article.image_url !== null &&
		article.title !== null &&
		article.description !== null
	)
}
