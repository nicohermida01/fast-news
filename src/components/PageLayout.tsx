import styled from 'styled-components'
import { ReactNode } from 'react'

import { HeaderApp } from './HeaderApp'
import { constants } from '@/constants'
import { Navbar } from './Navbar'

interface IPageLayoutProps {
	children: ReactNode
}

export function PageLayout({ children }: IPageLayoutProps) {
	return (
		<>
			<HeaderApp />
			<Navbar />
			<PageContainer>{children}</PageContainer>
		</>
	)
}

const PageContainer = styled.main`
	width: 100%;
	max-width: ${constants.APP_MAX_WIDTH}px;
	padding: 32px;
`
