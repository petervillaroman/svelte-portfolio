<script>
	// Images paths are now direct, assuming they are correctly placed in the `static/images` directory
	let images = [
		'../../bunnyPark.avif',
		'../../shotaPortrait.avif',
		'../../naraLick.avif',
		'../../vanNeon.avif',
		'../../sassyGuy.avif',
		'../../walkingGuy.avif',
		'../../rosary.avif',
		'../../maggie.avif',
		'../../josh.avif',
		'../../bikeGuy.avif',
		'../../bunnyChickens.avif',
		'../../maggieBunnyIkea.avif',
		'../../naraUpsidedown.avif',
		'../../maggieCostco.avif',
		'../../lyraPark.avif'
	];
	let zoomedImage = null;

	function toggleZoom(image) {
		zoomedImage = zoomedImage === image ? null : image;
	}
</script>

<section>
	<h1 align="left">Hello and welcome to my photo gallery.</h1>

	<p>
		This is a random accumulation of photos that I took. I bring my camera everywhere and photograph
		anything and everything that I see beauty in.
	</p>
	<p>
		If anything speaks to you I give you express permission to download it and use it however you
		want I just ask that you contact me to inform me about its usage at "petervillaroman@gmail.com".
	</p>
</section>

<!-- Optional: Overlay for displaying the zoomed image -->
{#if zoomedImage}
	<div class="overlay" on:click={() => toggleZoom(null)}>
		<img src={`/images/${zoomedImage}`} alt="Zoomed Image" />
	</div>
{/if}

<div class="gallery">
	{#each images as image}
		<div class="photo" on:click={() => toggleZoom(image)}>
			<img src={`/images/${image}`} alt={`Photo ${image}`} />
		</div>
	{/each}
</div>

<style>
	.gallery {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		cursor: pointer; /* Optional: changes the cursor on hover over images */
	}
	.photo {
		background-color: white; /* Adds a white background */
		border: 2px solid #ccc; /* Adds a border */
		overflow: hidden; /* Ensures no overflow of content */
		display: flex; /* Enables flexbox layout */
		justify-content: center; /* Center images horizontally */
		align-items: center; /* Center images vertically */
		flex: 1 0 calc(33.333% - 20px); /* Adjust the flex-basis to control the size, accounting for gap */
		max-width: 200px; /* Maximum width of a photo */
	}
	.photo img {
		width: 100%; /* Full width of the container */
		height: 100%; /* Full height of the container */
		object-fit: cover; /* Cover the container without losing aspect ratio */
		transition: transform 0.3s ease; /* Smooth transition for zoom effect */
	}
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 10;
	}
	.overlay img {
		max-width: 80%;
		max-height: 80%;
	}
</style>
