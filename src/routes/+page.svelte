<script>
	import '@picocss/pico';
	import '../styles/app.css';
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

	const handleClick = () => {
		console.log('Placing your order...');
		goto('/products');
	};

	beforeNavigate((navigation) => {
		console.log({ before: navigation });
	});
	afterNavigate((navigation) => {
		console.log({ after: navigation });
	});
</script>

<main class="container">
	<h1 class="text-red">Welcome to my Svelte-kit site!</h1>

	<button on:click={handleClick}> Place order </button>
</main>

<style>
</style>
