<script lang="ts">
	import Footer from "$lib/Footer.svelte"
</script>

<main class="bg-stone-100 min-h-screen flex flex-col justify-between gap-6">
	<h1 class="text-2xl lg:text-4xl text-white font-semibold p-8 lg:p-32 text-center shadow bg-80s">
		Privacy policy
	</h1>
	<div class="max-w-prose self-center flex flex-col gap-4">
		<p>These extensions do not gather or send any data to anyone.</p>
		<p>
			The "Subscribe to YouTube Playlists" and "Better Youtube Interactions" extensions both
			use Youtube's own API through the <a
				href="https://github.com/LuanRT/YouTube.js"
				target="_blank"
				rel="noreferrer"
				class="underline">YouTube.js</a
			> project and so are no different from using YouTube normally and son't send any other data
			to anyone else.
		</p>
	</div>
	<p class="text-center">
		<a href="/" data-sveltekit-prefetch class="underline	">Back to list</a>
	</p>
	<Footer />
</main>
