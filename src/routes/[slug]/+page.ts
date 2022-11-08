import { extensions } from "$lib/data"
import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit"

export const load: PageLoad = ({ params }) => {
	const { slug } = params
	const extension = extensions.find(ext => ext.slug == slug)

	if (!extension) throw error(404, "Not found")

	return {
		extension,
	}
}
