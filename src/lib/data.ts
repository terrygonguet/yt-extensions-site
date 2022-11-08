const html = String.raw

export interface Extension {
	name: string
	slug: string
	summary: string
	description: string
	links: {
		github: string
		chrome: string
		firefox: string
	}
}

export const extensions: Extension[] = [
	{
		name: "Youtube Ends At",
		slug: "ends-at",
		summary:
			"Displays what time it will be when the video ends, taking playback rate into account.",
		description: html`<p>
				This extension just displays what time it will be when the video ends, taking
				playback rate into account.
			</p>
			<p>Click on the label to change to "ends in" mode.</p>
			<p>This currently does not account for SponsorBlock segments.</p>`,
		links: {
			github: "https://github.com/terrygonguet/youtube-ends-at",
			chrome: "https://chrome.google.com/webstore/detail/youtube-ends-at/oahgfgokmkpgkbfnedkbbmnogjmfpljd",
			firefox: "https://addons.mozilla.org/en-US/firefox/addon/youtube-ends-at/",
		},
	},
	{
		name: "Subscribe to YouTube Playlists",
		slug: "sub-to-playlists",
		summary:
			"Easily check if there are new videos in the playlists in your library. Now with a subscriptions-like feed!",
		description: html` <p>
				An extension to check if there are new videos in the playlists you added to your
				library.
			</p>
			<p>
				The "Playlists" tab lets you hide playlists you don't care about and reverse tho
				order of playlists that are the wrong way around.
			</p>
			<p>
				The "Feed" tab shows you a subscriptions-like feed with all the videos (in playlists
				you haven't hidden) in chronological order.
			</p>`,
		links: {
			github: "https://github.com/terrygonguet/sub-to-yt-playlist",
			chrome: "https://chrome.google.com/webstore/detail/iiidhbnhammhbfmaigembfdlmaeabgfl",
			firefox: "https://addons.mozilla.org/en-US/firefox/addon/youtube-sub2playlist/",
		},
	},
	{
		name: "Better Youtube Interactions",
		slug: "better-interactions",
		summary:
			"Adds a small menu to like/dislike and comment on videos you're watching without having to leave fullscreen mode.",
		description: html`<p>
				This extensions adds a small menu to like/dislike and comment on videos you're
				watching without having to leave fullscreen mode.
			</p>
			<p>Auto-like and auto-comment coming soon!</p>`,
		links: {
			github: "https://github.com/terrygonguet/better-youtube-interactions",
			chrome: "https://chrome.google.com/webstore/detail/aefhjhjbffbfiafaadbclhmkakihlmdd",
			firefox: "https://addons.mozilla.org/en-US/firefox/addon/better-youtube-interactions/",
		},
	},
]
