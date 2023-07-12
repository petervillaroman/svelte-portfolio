<script>
	import { toggleTheme, currentTheme } from '../theme.js';
</script>

<div class="grid">
	{#if $currentTheme === 'light'}
		<div>dark mode?</div>
		<!-- content here -->
	{:else}
		<div>light mode?</div>
	{/if}
	<button on:click={toggleTheme}>
		{$currentTheme === 'light' ? ' 🌙' : '☀️ '}
	</button>
</div>

<style>
	button {
		display: inline-block;
		width: 2rem; /* Adjust this as needed */
		height: 2rem; /* Adjust this as needed */
		background-color: #f76027;
		color: white;
		border: none;
		border-radius: 10px;
		padding: 0;
	}
	:global(html[data-theme='dark']) button {
		background-color: #3366ff;
		color: white;
	}
	.grid {
		display: flex;
		justify-content: space-between;
	}
</style>
