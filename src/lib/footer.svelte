<script>
    import '@picocss/pico';
	import '../styles/app.css';
    import ModeSwitch from './mode-switch.svelte';
</script>

<style>
    .grid{
        display: flex;
        justify-content: space-between;
    }
</style>
<div class="grid">
<footer class="footer"><p>&copy; 2023 Peter Villaroman. All rights reserved.</p></footer>

<ModeSwitch />
</div>