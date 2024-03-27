<script>
    // Images paths are now direct, assuming they are correctly placed in the `static/images` directory
    let images = ['../../shotaPortrait.jpg', '../../naraLick.jpg', '../../vanNeon.jpg'];
    let zoomedImage = null;
  
    function toggleZoom(image) {
      zoomedImage = zoomedImage === image ? null : image;
    }
  </script>
  
  <!-- Optional: Overlay for displaying the zoomed image -->
  {#if zoomedImage}
    <div class="overlay" on:click={() => toggleZoom(null)}>
      <img src={`/images/${zoomedImage}`} alt="Zoomed Image">
    </div>
  {/if}
  
  <div class="gallery">
    {#each images as image}
      <div class="photo" on:click={() => toggleZoom(image)}>
        <img src={`/images/${image}`} alt={`Photo ${image}`}>
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
    .photo img {
      width: 100%;
      max-width: 200px; /* Adjust based on your preference */
      height: auto;
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
  