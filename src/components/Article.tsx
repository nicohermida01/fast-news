import { formatDistanceStrict } from 'date-fns'
import Image from 'next/image'
import styled from 'styled-components'

import { ClockIcon } from './icons/ClockIcon'

interface IArticleProps {
	title: string
	imageUrl: string
	description: string
	publishDate: Date | string
	categories: string[]
	large?: boolean
}

export function Article({
	title,
	imageUrl,
	description,
	publishDate,
	categories,
	large,
}: IArticleProps) {
	return (
		<Container $large={large}>
			<ImageWrapper $large={large}>
				<Image width={1920} height={1080} src={imageUrl} alt={title} />
			</ImageWrapper>

			<Content $large={large}>
				<Title $large={large}>{title}</Title>

				<Deatils>
					<ClockIcon width={20} />
					{formatDistanceStrict(new Date(publishDate), new Date(), {
						addSuffix: true,
					})}
					<Categories>
						{categories.map((category, index) => (
							<span key={index}>{category}</span>
						))}
					</Categories>
				</Deatils>

				<Description>{description}</Description>
			</Content>
		</Container>
	)
}

const Container = styled.article`
	height: 400px;
	width: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: ${props => (props.$large ? 'row' : 'column')};
`

const ImageWrapper = styled.div`
	height: ${props => (props.$large ? '100%' : '200px')};
	width: ${props => (props.$large ? '60%' : '100%')};

	& img {
		width: 100%;
		height: 100%;
	}
`

const Content = styled.div`
	width: ${props => (props.$large ? '40%' : '100%')};
	height: ${props => (props.$large ? '100%' : '200px')};
	padding: 16px;

	display: flex;
	flex-direction: column;
`

const Title = styled.h3`
	font-size: ${props => (props.$large ? '32px' : '16px')};
`

const Deatils = styled.div`
	font-size: 14px;
	display: flex;
	align-items: center;
	color: rgba(0, 0, 0, 0.5);
	gap: 4px;
	margin: 8px 0 16px 0;
`

const Categories = styled.div`
	display: flex;
	align-items: center;
	border-left: 2px solid rgba(0, 0, 0, 0.5);
	padding-left: 4px;

	& span {
		font-weight: bold;
		text-transform: uppercase;
	}
`

const Description = styled.p`
	overflow: auto;

	&::-webkit-scrollbar {
		width: 4px;
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 8px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
`
