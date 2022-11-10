<script lang="ts">
	import Card from "$lib/Card.svelte"
	import { extensions } from "$lib/data"
	import Footer from "$lib/Footer.svelte"
</script>

<svelte:head>
	<title>Terry's web extensions to make Youtube more good ™</title>
</svelte:head>

<main class="bg-stone-100 min-h-screen flex flex-col justify-between gap-6">
	<h1 class="text-2xl lg:text-4xl text-white font-semibold p-8 lg:p-32 text-center shadow bg-80s">
		Terry's web extensions to make Youtube more good ™
	</h1>
	<div class="w-full max-w-screen-lg mx-auto px-2 grid lg:grid-cols-3 gap-6">
		{#each extensions as data}
			<Card {data} />
		{/each}
	</div>
	<p class="text-center mx-auto px-2">
		I also highly recommend using <a
			href="https://www.mrfdev.com/enhancer-for-youtube"
			target="_blank"
			rel="noreferrer"
			class="underline">Enhancer for YouTube</a
		>
		and
		<a href="https://sponsor.ajay.app/" target="_blank" rel="noreferrer" class="underline"
			>SponsorBlock</a
		>
	</p>
	<Footer />
</main>
