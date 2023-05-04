import styled from 'styled-components'

import { IHomePageProps } from '@/interfaces/pageProps.interface'
import { sanitizeArticles } from '@/utils/SanitizeArticles'
import { INewsResponse, getNews } from '@/services/news.service'
import { ArticlesLayout } from '@/components/ArticlesLayout'

export default function Home({ articles }: IHomePageProps) {
	return <ArticlesLayout articles={articles} />
}

export async function getServerSideProps() {
	let props: IHomePageProps = {
		articles: [],
	}

	const request: INewsResponse = await getNews()

	props.articles = sanitizeArticles(request.results)

	return {
		props: props,
	}
}
