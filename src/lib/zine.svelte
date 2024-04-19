<!-- <script>
	import { onMount } from 'svelte';
	let pdfHeight = 0;

	onMount(() => {
		updateHeight();
		window.addEventListener('resize', updateHeight);

		return () => {
			window.removeEventListener('resize', updateHeight);
		};
	});

	function updateHeight() {
		pdfHeight = window.innerHeight * 0.8;
		document.documentElement.style.setProperty('--pdfHeight', `${pdfHeight}px`);
	}
</script>

<embed src="/hahaZine.pdf" class="pdf-viewer" type="application/pdf" />

<style>
	.pdf-viewer {
		width: 100%; /* Full width */
		height: var(--pdfHeight); /* Dynamically adjusted height using CSS variable */
		border: none; /* No border for cleaner integration */
	}
</style> -->

<script>
	import PdfViewer from 'svelte-pdf';
</script>

<PdfViewer showButtons={['zoom', 'navigation', 'download']} url="/hahaZine.pdf" />
