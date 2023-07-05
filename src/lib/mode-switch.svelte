<script>
    import { toggleTheme, currentTheme } from '../theme.js';

</script>

<button on:click={toggleTheme}>
    {$currentTheme === 'light' ? ' Dark Mode' : ' Light Mode'}
</button>

<style>
    button {
        display: inline-block;
        width: 4rem;  /* Adjust this as needed */
        height: 3rem;  /* Adjust this as needed */
        background-color: #f76027;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 0;
        text-transform: lowercase;
    }
    :global(html[data-theme="dark"]) button {
        background-color: #3366ff;
        color: white;
    }
</style>
