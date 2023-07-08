<script>
	import '@picocss/pico';
	import '../styles/app.css';
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import {slide, fly, fade } from 'svelte/transition'



</script>

<main class="container">
	<div class="grid">
	<h1 class="text-red" in:fly={{y:200, duration: 500,}} >
	Hello World!
	</h1>
	<h4>
		Welcome to my humble corner of the internet. 
	</h4>
</div>
</main>

<style>
</style>
