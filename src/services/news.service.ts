import { IArticle } from '@/interfaces/article.interface'
import axios from 'axios'

export interface INewsResponse {
	status: string
	totalResults: number
	results: IArticle[]
	nextPage: string
}

export const getNews = async (): Promise<INewsResponse> => {
	const response = await axios.get('https://newsdata.io/api/1/news', {
		params: {
			apikey: process.env.NEWSDATA_API_KEY,
			country: 'us',
		},
	})

	return response.data
}
