<script lang="ts">
	import Footer from "$lib/Footer.svelte"
	import Links from "$lib/Links.svelte"
	import type { PageData } from "./$types"

	export let data: PageData

	$: ({ extension } = data)
	$: src = `/${extension.slug}.svg`
</script>

<svelte:head>
	<title>{extension.name}</title>
</svelte:head>

<main class="bg-stone-100 min-h-screen flex flex-col justify-between gap-6">
	<h1
		class="text-2xl lg:text-4xl text-white font-semibold p-8 lg:p-[5.5rem] shadow bg-80s flex flex-col items-center gap-4 text-center"
	>
		<img {src} alt="icon" class="h-16" />
		{extension.name}
	</h1>

	<div class="max-w-prose px-2 self-center text-justify lg:text-center flex flex-col gap-4">
		{@html extension.description}
	</div>

	<Links {...extension.links} class="self-center" />

	<p class="text-center">
		<a href="/" data-sveltekit-prefetch class="underline	">Back to list</a>
	</p>

	<Footer />
</main>
