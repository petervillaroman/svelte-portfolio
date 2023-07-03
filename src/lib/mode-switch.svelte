<script>
    import { toggleTheme, currentTheme } from '../theme.js';

</script>

<button on:click={toggleTheme}>
    {$currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
</button>

<style>
    button {
        display: inline-block;
        width: 200px;  /* Adjust this as needed */
        height: 50px;  /* Adjust this as needed */
        background-color: #f76027;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: lowercase;
    }
    :global(html[data-theme="dark"]) button {
        background-color: #3366ff;
        color: white;
    }
</style>
