<script>
	import '@picocss/pico';
	import '../styles/app.css';
    import Header from '../lib/header.svelte';
	import Footer from '../lib/footer.svelte';
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
