<script>
	import '@picocss/pico';
	import '../styles/app.css';
	import { setInitialTheme } from '../theme.js';
	import Header from '../lib/header.svelte';
	import Footer from '../lib/footer.svelte';
	import { onMount } from 'svelte';

	// Call the setInitialTheme function when the component mounts
	onMount(setInitialTheme);
	
</script>

<main class="container">
	<article>
		<Header />
		<section>
			<slot />
		</section>

		<Footer />
	</article>
</main>
