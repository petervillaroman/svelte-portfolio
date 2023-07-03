<script>
    import '@picocss/pico';
	import '../styles/app.css';
</script>



<style>
    .header section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #befd35;
    }
    .header section a { 
        color: #000;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;
        padding: 0 1rem;
    }
    .header section a:hover {
        color: #fff;
        background-color: #000;
    }
</style>
<header class="header">
    <section>
        <a role="button" href="/">Home</a>
        <a role="button" href="/about"> About</a>
        <a role="button" href="/blog"> Blog</a>
        <a role="button" href="/products"> Products</a>

        <a role="button" href="/login"> Login </a>
    </section>
</header>