<script lang="ts">
	import { onMount } from "svelte"

	function figureOutDate() {
		const now = new Date()
		const from = "2022"
		const to = now.getFullYear().toString()
		return from == to ? to : from + "-" + to
	}

	let date = figureOutDate()

	onMount(() => (date = figureOutDate()))
</script>

<footer class="bg-80s text-white text-center p-8">
	<p>© <a href="mailto:terry@gonguet.com" class="underline">Terry Gonguet</a> {date}</p>
</footer>
