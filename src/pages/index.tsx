import { IHomePageProps } from '@/interfaces/pageProps.interface'
import { INewsResponse, getNews } from '@/services/news'

export default function Home(props: IHomePageProps) {
	return (
		<div>
			<h1>HomePage</h1>
		</div>
	)
}

export async function getServerSideProps() {
	let props: IHomePageProps = {
		articles: [],
	}

	const request: INewsResponse = await getNews()

	props.articles = request.data

	return {
		props: props,
	}
}
