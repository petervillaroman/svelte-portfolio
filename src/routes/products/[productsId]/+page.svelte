<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	console.log($page.params);

	let productsId;
	let double;
	let quadruple;
	let octuple;

	onMount(() => {
		const id = +$page.params.productsId;
		if (isNaN(id)) {
			throw new Error('Invalid id');
		} else {
            productsId = id;
			double = id * 2;
			quadruple = id * 4;
			octuple = double * quadruple;
		}
	});
</script>

<h1>{productsId}</h1>
<h1>Double of {productsId} is {double}</h1>
<h1>Quadruple of {productsId} is {quadruple}</h1>
<h1>Octuple of {productsId} is {octuple}</h1>
