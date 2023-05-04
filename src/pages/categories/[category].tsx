import { ArticlesLayout } from '@/components/ArticlesLayout'
import { IHomePageProps } from '@/interfaces/pageProps.interface'
import { INewsResponse, getNews } from '@/services/news.service'
import { sanitizeArticles } from '@/utils/SanitizeArticles'

export default function CategoryPage({ articles }: IHomePageProps) {
	return <ArticlesLayout articles={articles} />
}

export async function getServerSideProps(context) {
	let props: IHomePageProps = {
		articles: [],
	}

	const request: INewsResponse = await getNews(context.query.category)
	props.articles = sanitizeArticles(request.results)

	return {
		props: props,
	}
}
