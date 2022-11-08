<script lang="ts">
	import ChromeIcon from "~icons/openmoji/chrome"
	import FirefoxIcon from "~icons/openmoji/firefox"
	import GithubIcon from "~icons/openmoji/github"

	let classes = ""

	export { classes as class }
	export let chrome: string
	export let firefox: string
	export let github: string | undefined = undefined
</script>

<menu class="{classes} flex gap-1 text-lg items-center">
	<li>
		<a href={chrome} target="_blank" rel="noreferrer" class="flex items-center">
			Chrome
			<ChromeIcon width="3rem" height="3rem" />
		</a>
	</li>
	|
	{#if github}
		<li>
			<a href={github} target="_blank" rel="noreferrer" class="flex items-center">
				Github
				<GithubIcon width="3rem" height="3rem" />
			</a>
		</li>
		|
		<li>
			<a href={firefox} target="_blank" rel="noreferrer" class="flex items-center">
				Firefox
				<FirefoxIcon width="3rem" height="3rem" />
			</a>
		</li>
	{:else}
		<li>
			<a href={firefox} target="_blank" rel="noreferrer" class="flex items-center">
				<FirefoxIcon width="3rem" height="3rem" />
				Firefox
			</a>
		</li>
	{/if}
</menu>
