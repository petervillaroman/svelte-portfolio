<script>
	import '@picocss/pico';
	import '../styles/app.css';
	import ModeSwitch from './mode-switch.svelte';
	import { onDestroy, onMount } from 'svelte';
</script>

<header class="header">
	<section>
		<a role="button" href="/" >Home</a>
		<a role="button" href="/about" >About</a>
		<a role="button" href="/contact" >Contact</a>
	</section>
</header>

<style>
	.header section {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 1rem;

		flex-wrap: wrap; /* Allow items to wrap onto the next line if there isn't enough room */
	}
	.header section a {
		color: #000;
		text-decoration: none;
		font-weight: bold;
		font-size: 1rem;
		padding: 0 0.5rem;
		margin-right: 1rem;
		flex-grow: 1; /* Allow links to expand to take up remaining space */
	}
	.header section a:hover {
		color: #fff;
		background-color: #000;
	}

	/* Increase size of links on smaller screens */
	@media (max-width: 600px) {
		.header section {
			flex-wrap: wrap;
			flex-grow: 1;
			margin: 0;
			padding: 0.5rem 0.5rem 0.5rem 0.5rem;
		}
		.header section a {
			font-size: 1.5rem;
			padding: 0.5rem;
			margin-bottom: 0.5rem;
		}
	}
</style>
