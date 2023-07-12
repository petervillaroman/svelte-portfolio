<script>
	import Dropdown from '$lib/dropdown.svelte';
	import Quote from '$lib/quote.svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn, elasticOut } from 'svelte/easing';

	function colorChange(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `color: hsl(
					${~~(t * 360)},
					${Math.min(100, 1000 - 1000 * t)}%,
					${Math.min(50, 500 - 500 * t)}%
				);`;
			}
		};
	}
</script>

<main class="container" />
<div class="grid" >
<h1>
	My name is 
	<div class="name"  in:colorChange={{ duration: 3000, delay:500}}><b>KARELL PETER</b></div>
	 Villaroman
</h1>

<h5>
	I am a 3rd year Computer Science student at the University of Nevada, Las Vegas.
	I am also a Software Engineer Intern at <a href="https://www.nellisauction.com/">Nellisauction.com</a>.
</h5>
</div>
<div class="grid">
	<Dropdown />
</div>

<style>
	.name {
		color: var(--primary-complement);
	}
</style>
