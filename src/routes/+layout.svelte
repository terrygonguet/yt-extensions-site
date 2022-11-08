<script>
	import Footer from "$lib/Footer.svelte"
	import "../app.postcss"
</script>

<main class="bg-stone-100 min-h-screen flex flex-col">
	<slot />
	<Footer />
</main>
