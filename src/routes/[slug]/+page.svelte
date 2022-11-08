<script lang="ts">
	import Links from "$lib/Links.svelte"
	import type { PageData } from "./$types"

	export let data: PageData

	$: ({ extension } = data)
	$: src = `/${extension.slug}.svg`
</script>

<svelte:head>
	<title>{extension.name}</title>
</svelte:head>

<h1
	class="text-2xl lg:text-4xl text-white font-semibold p-8 lg:p-[5.5rem] shadow bg-80s flex flex-col items-center gap-4 text-center"
>
	<img {src} alt="icon" class="h-16" />
	{extension.name}
</h1>

<div
	class="max-w-prose mt-auto px-2 lg:mx-auto mb-6 text-justify lg:text-center flex flex-col gap-4"
>
	{@html extension.description}
</div>
<Links {...extension.links} class="m-auto" />
