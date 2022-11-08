<script lang="ts">
	import Links from "$lib/Links.svelte"
	import type { Extension } from "$lib/data"

	export let data: Extension

	$: src = `/${data.slug}.svg`
	$: href = "/" + data.slug
</script>

<a {href} data-sveltekit-prefetch class="rounded shadow bg-white p-4 grid place-items-center gap-4">
	<img {src} alt="icon" class="w-24" />
	<h2 class="text-xl font-bold">{data.name}</h2>
	<p class="text-center">{data.summary}</p>
	<Links chrome={data.links.chrome} firefox={data.links.firefox} />
</a>
