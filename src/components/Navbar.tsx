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
		router.pathname === '/' ? categories.GENERAL : router.query.category

	return (
		<Container>
			<NavbarWrapper>
				<NavOptions>
					{categoriesIterable.map((category, index) => {
						const hrefUrl =
							category === categories.GENERAL ? '/' : `/categories/${category}`

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
	padding: 0 32px;
`

const NavOptions = styled.ul`
	display: flex;
`

const StyledLink = styled(Link)`
	display: inline-block;
	font-size: 14px;
	font-weight: bold;
	padding: 16px 32px;

	${props => props.$pageActive && `border-bottom: 2px solid ${colors.PRIMARY}`}
`
