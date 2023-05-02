import { constants } from '@/constants'
import styled from 'styled-components'

export function HeaderApp() {
	return (
		<Container>
			<HeaderWrapper></HeaderWrapper>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background-color: #fff;
`

const HeaderWrapper = styled.header`
	width: 100%;
	max-width: ${constants.APP_MAX_WIDTH}px;
	padding: 16px 32px;
`
