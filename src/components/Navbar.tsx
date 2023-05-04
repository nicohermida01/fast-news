import Link from 'next/link'
import styled from 'styled-components'
import _ from 'lodash'
import { useRouter } from 'next/router'

import { constants } from '@/constants'
import { categories, categoriesIterable } from '@/ssot/newsCategories'
import { colors } from '@/ssot/colors'

export function Navbar() {
	const router = useRouter()
	const categoryActive =
		router.pathname === '/' ? categories.LATEST : router.query.category

	return (
		<Container>
			<NavbarWrapper>
				<NavOptions>
					{categoriesIterable.map((category, index) => {
						const hrefUrl =
							category === categories.LATEST ? '/' : `/categories/${category}`

						return (
							<li key={index}>
								<StyledLink
									$pageActive={category === categoryActive}
									href={hrefUrl}
								>
									{_.capitalize(category)}
								</StyledLink>
							</li>
						)
					})}
				</NavOptions>
			</NavbarWrapper>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background-color: #fff;
`

const NavbarWrapper = styled.nav`
	width: 100%;
	max-width: ${constants.APP_MAX_WIDTH}px;
	margin: 0 auto;
`

const NavOptions = styled.ul`
	display: flex;
	max-width: 100%;
	overflow-x: scroll;
	transition: all ease 0.4s;

	&::-webkit-scrollbar {
		height: 0;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 8px;
	}

	&:hover::-webkit-scrollbar {
		height: 8px;
	}
`

const StyledLink = styled(Link)`
	display: inline-block;
	font-size: 14px;
	font-weight: bold;
	padding: 16px 32px;
	transition: background-color ease 0.4s;

	${props => props.$pageActive && `border-bottom: 2px solid ${colors.PRIMARY}`};

	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
`
