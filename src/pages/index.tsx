import styled from 'styled-components'

import { IHomePageProps } from '@/interfaces/pageProps.interface'
import { sanitizeArticles } from '@/utils/SanitizeArticles'
import { INewsResponse, getNews } from '@/services/news.service'
import { Article } from '@/components/Article'

export default function Home({ articles }: IHomePageProps) {
	return (
		<Container>
			<Article
				title={articles[0].title}
				description={articles[0].description}
				imageUrl={articles[0].image_url}
				large
			/>
			<ArticlesGrid>
				{articles.map((art, index) => {
					if (index > 0)
						return (
							<Article
								key={index}
								title={art.title}
								description={art.description}
								imageUrl={art.image_url}
							/>
						)
				})}
			</ArticlesGrid>
		</Container>
	)
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

const Container = styled.div``

const ArticlesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`
