import styled from 'styled-components'
import Link from 'next/link'

import { constants } from '@/constants'
import { AppLogo } from './icons/AppLogo'
import { colors } from '@/ssot/colors'
import { UserIcon } from './icons/UserIcon'
import { SearchBox } from './SearchBox'

export function HeaderApp() {
	return (
		<Container>
			<HeaderWrapper>
				<AppLogo width={60} height={40} />

				<ContainerFlex>
					<SearchBox />
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
