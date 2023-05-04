export interface IArticle {
	title: string
	description: string
	link: string
	content: string
	creator: string
	image_url: string
	video_url: string
	pubDate: Date

	language: string
	category: string[]
	country: string[]
	keywords: string[]
}
