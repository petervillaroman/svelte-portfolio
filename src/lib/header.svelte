<script>
    import '@picocss/pico';
	import '../styles/app.css';
    import ModeSwitch from './mode-switch.svelte';

    import { onMount } from "svelte";
    import clickOutside from "svelte-click-outside";
    // hamburger menu 
    let isMobileMenuOpen = false;
    const toggleMobileMenu = () => isMobileMenuOpen = !isMobileMenuOpen;
    const closeMobileMenu = () => isMobileMenuOpen = false;

    onMount(() => {
        // Close the menu when the window is resized
        window.addEventListener('resize', () => {
            if (window.innerWidth > 600 && isMobileMenuOpen) {
                closeMobileMenu();
            }
        });
    });

</script>



<style>
    .header section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem;
        background-color: #befd35;
    }
    .header section a { 
        color: #000;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;
        padding: 0 1rem;
        margin-right: 2rem;
        
    }
    .header section a:hover {
        color: #fff;
        background-color: #000;
    }
    .hamburger {
        display: none;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        background-color: #fdd835;
    }

    .hamburger-box {
        width: 35px;
        height: 24px;
        display: inline-block;
        position: relative;
    }

    .hamburger-inner, 
    .hamburger-inner::before, 
    .hamburger-inner::after {
        width: 50px;
        height: 4px;
        background-color: #f76027;
        position: absolute;
        left: 0;
    }

    .hamburger-inner {
        top: 50%;
        transform: translateY(-50%);
    }

    .hamburger-inner::before, 
    .hamburger-inner::after {
        content: '';
    }

    .hamburger-inner::before {
        top: -10px;
    }

    .hamburger-inner::after {
        top: 10px;
    }

    .mobile-menu {
        display: none;
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%; 
        height: 90%; 
        background-color: rgba(0,0,0,0.9); /* semi-transparent black */
        color: white; 
        padding: 10px;
        box-sizing: border-box;
        overflow: auto; 
    }

    .mobile-menu a {
        display: block;
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        margin: 1rem;
    }

    @media (max-width: 600px) {
        .header section {
            display: none;
        }
        .hamburger {
            display: block;
        }
        .mobile-menu.open {
            display: block;
        }
    }

    
</style>

<header class="header">
    <section>
        <a role="button" href="/">Home</a>
        <a role="button" href="/about">About</a>
        <a role="button" href="/contact">Contact</a>
    </section>

    <button class="hamburger" on:click={toggleMobileMenu}>
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>

    <div use:clickOutside={closeMobileMenu} class="mobile-menu" class:open={isMobileMenuOpen}>
        <a role="button" href="/">Home</a>
        <a role="button" href="/about">About</a>
        <a role="button" href="/contact">Contact</a>

    </div>
</header>