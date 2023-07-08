<script>
	import '@picocss/pico';
	import '../styles/app.css';
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import { slide, fly, fade } from 'svelte/transition';
</script>

<main class="container">
	<div class="grid">
		<h1 class="greeting" in:fade={{ duration: 1500, delay: 300 }}>Hello World!</h1>
		<div class="welcome-column">
				<img class="welcome-column-element" src="penny.jpeg" alt="a gray cat" />
			<h4 class="welcome-column-element">Welcome to my humble corner of the internet.</h4>
		</div>
	</div>
</main>

<style>
	img {
		width: 60%;
		height: 60%;
		background-color: black;
		padding: 2rem;
	}
	h4 {
		background-color: red;
	}

	.grid {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: space-between;
		background-color: green;
	}
	.greeting {
		font-size: 5rem;
		font-weight: 900;
		line-height: 0.75;
		color: #f76027;
		align-self: center;
	}
	.welcome-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: blue;
	}
	.welcome-column-element {
		padding: 1rem;
	}

	@media (max-width: 600px) {
		.grid {
			flex-wrap: wrap;
			margin: 0;
			padding: 0.5rem 0.5rem 0.5rem 0.5rem;
		}
	}



	img:hover {
		transform: scale(1.2); /* Apply a scale transformation on hover */
	}
</style>
