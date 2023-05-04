import Image from 'next/image'
import styled from 'styled-components'

interface IArticleProps {
	title: string
	imageUrl: string
	description: string
	large?: boolean
}

export function Article({
	title,
	imageUrl,
	description,
	large,
}: IArticleProps) {
	return (
		<Container $large={large}>
			<ImageWrapper $large={large}>
				<Image width={1920} height={1080} src={imageUrl} alt={title} />
			</ImageWrapper>
			<Content $large={large}>
				<Title $large={large}>{title}</Title>
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
	gap: 16px;
`

const Title = styled.h3`
	font-size: ${props => (props.$large ? '32px' : '16px')};
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
