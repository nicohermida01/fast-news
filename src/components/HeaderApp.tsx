import styled from 'styled-components'
import Link from 'next/link'

import { constants } from '@/constants'
import { AppLogo } from './icons/AppLogo'
import { colors } from '@/ssot/colors'
import { UserIcon } from './icons/UserIcon'
import { SearchIcon } from './icons/SearchIcon'

export function HeaderApp() {
	return (
		<Container>
			<HeaderWrapper>
				<AppLogo width={60} height={40} />

				<ContainerFlex>
					<SearchBox>
						<SearchIcon />
						<SearchInput type='search' placeholder='Bitcoin, Covid ...' />
					</SearchBox>
					<LoginButton href={'#'}>
						<UserIcon width={16} height={16} />
						log in
					</LoginButton>
				</ContainerFlex>
			</HeaderWrapper>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const HeaderWrapper = styled.header`
	width: 100%;
	max-width: ${constants.APP_MAX_WIDTH}px;
	margin: 0 auto;
	padding: 16px 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ContainerFlex = styled.div`
	display: flex;
	gap: 32px;
	align-items: center;
`

const SearchBox = styled.div`
	width: 250px;
	position: relative;

	& svg {
		width: 20px;
		height: 20px;
		position: absolute;
		top: calc(50% - 10px);
		left: 16px;
		fill: rgba(0, 0, 0, 0.5);
	}
`

const SearchInput = styled.input`
	width: 100%;
	border: none;
	background-color: rgba(0, 0, 0, 0.05);
	font-size: 12px;
	padding: 8px 16px;
	padding-left: calc(16px + 20px + 4px);
	border-radius: 16px;
	transition: all ease 0.4s;

	&:focus {
		outline: none;
		background-color: rgba(0, 0, 0, 0.1);
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`

const LoginButton = styled(Link)`
	background-color: ${colors.PRIMARY};
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 12px;
	padding: 8px 16px;
	border-radius: 32px;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: all ease 0.4s;

	&:hover {
		background-color: ${colors['PRIMARY.700']};
	}
`
