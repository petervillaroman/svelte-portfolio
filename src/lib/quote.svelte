<script>
	import { onMount } from 'svelte';
	let quote = '';
	export const ssr = false;

	const getData = async () => {
		const response = await fetch('https://api.kanye.rest');
		if (response.ok) {
			const json = await response.json();
			quote = undefined;
			quote = json.quote;
		} else {
			console.error('Error:', response.status);
		}
	};

	onMount(() => {
		getData();
	});
</script>

<main>
	<div class="container">
		<img src="kanye1.png" alt="Kanye West" on:click={getData} />
		<div class="quote">
			<blockquote>
				<h2>
					{quote}
				</h2>
				<footer>
					<cite>- Kanye West </cite>
				</footer>
			</blockquote>
		</div>
	</div>
</main>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.quote {
		flex-grow: 1;
		text-align: center;
	}
	img {
		width: 30%;
		height: 30%;
		cursor: pointer;
		padding: 1rem;
	}

	img:hover {
		transform: scale(1.2);
	}
</style>
