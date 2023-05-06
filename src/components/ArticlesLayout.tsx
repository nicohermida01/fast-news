import styled from 'styled-components'

import { Article } from './Article'
import { IArticle } from '@/interfaces/article.interface'

interface IArticlesLayoutProps {
	articles: IArticle[]
}

export function ArticlesLayout({ articles }: IArticlesLayoutProps) {
	if (articles.length > 0) {
		return (
			<>
				<Article
					title={articles[0].title}
					description={articles[0].description}
					imageUrl={articles[0].image_url}
					publishDate={articles[0].pubDate}
					categories={articles[0].category}
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
									publishDate={art.pubDate}
									categories={art.category}
								/>
							)
					})}
				</ArticlesGrid>
			</>
		)
	}

	return 'sin articulos'
}

const ArticlesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`
