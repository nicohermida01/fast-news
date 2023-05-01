import axios from 'axios'

import { IArticle } from '@/interfaces/article.interface'

interface IPagination {
	limit: number
	offset: number
	count: number
	total: number
}

export interface INewsResponse {
	pagination: IPagination
	data: IArticle[]
}

export const getNews = async (): Promise<INewsResponse> => {
	const response = await axios.get(`http://api.mediastack.com/v1/news`, {
		params: {
			access_key: process.env.MEDIASTACK_API_KEY,
		},
	})

	return response.data
}
