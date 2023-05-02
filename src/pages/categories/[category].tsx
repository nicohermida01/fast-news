import { useRouter } from 'next/router'

export default function CategoryPage() {
	const router = useRouter()

	return <div>{router.query.category}</div>
}
