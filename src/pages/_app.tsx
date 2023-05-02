import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Roboto } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar'

import { PageLayout } from '@/components/PageLayout'

const RobotoFont = Roboto({
	subsets: ['latin'],
	style: 'normal',
	weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PageLayout>
			<style jsx global>{`
				html {
					font-family: ${RobotoFont.style.fontFamily};
				}
			`}</style>
			<Head>
				<title>Fast News</title>
			</Head>
			<NextNProgress />
			<Component {...pageProps} />
		</PageLayout>
	)
}
