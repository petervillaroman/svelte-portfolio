<script>
	import '@picocss/pico';
	import '../styles/app.css';
</script>

<article>
	<main class="container">
		<header class="header">
			<section>
				<a role="button" href="/">Home</a>
				<a role="button" href="/blog"> Blog</a>
				<a role="button" href="/products"> Products</a>
				<a role="button" href="/about"> About</a>
			</section>
		</header>
		<slot />
		<footer class="footer"><p>&copy; 2023 Peter Villaroman. All rights reserved.</p></footer>
	</main>
</article>
