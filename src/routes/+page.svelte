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
	<h1 class="text-red">Welcome home!</h1>
	<form>
		<input type="text" />
		<button type="submit">Action</button>
	</form>

	<button on:click={handleClick}> Place order </button>
</main>

<style>
</style>
