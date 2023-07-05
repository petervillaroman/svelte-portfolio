<script>
    import '@picocss/pico';
	import '../styles/app.css';
    import ModeSwitch from './mode-switch.svelte';
</script>



<style>
    .header section {
        display: flex;
        justify-content: space-around;
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
        margin-right: 2rem;
        
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

        <ModeSwitch/>
        <!-- kinda makes the website look cool so I'll keep this in-->      

    </section>
</header> 