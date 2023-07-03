<script>
	import '@picocss/pico';
	import '../styles/app.css';
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import {slide, fly, fade } from 'svelte/transition'
</script>

<main class="container">
	<h1 class="text-red" in:fly={{y:200, duration: 500,}} >Welcome to my Svelte-kit site!</h1>

</main>

<style>
</style>
