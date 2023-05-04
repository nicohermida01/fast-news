import { IArticle } from '@/interfaces/article.interface'

export const sanitizeArticles = (articles: IArticle[]) => {
	return articles.filter(article => article.image_url !== null)
}
