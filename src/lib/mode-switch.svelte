<script>
    import { toggleTheme, currentTheme } from '../theme.js';
</script>

<button on:click={toggleTheme}>
    {$currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
</button>

<style>
    button {
        background-color: #f76027;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
    }
    :global(html[data-theme="dark"]) button {
        background-color: #0084f6;
        color: white;
    }
</style>
