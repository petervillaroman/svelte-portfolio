<script>
	import Dropdown from '$lib/dropdown.svelte';
	import Quote from '$lib/quote.svelte';
	import { fade, slide, scale } from 'svelte/transition';
</script>

<main class="container" />

<h1>
	My name is <div class="name" in:fade={{ duration: 2000 }}><b>KARELL PETER</b></div>
	Villaroman
</h1>
<section>
	<Quote />
</section>
<div class="grid">
	<Dropdown />
</div>

<style>
	.name {
		color: #f76027;
	}
</style>
