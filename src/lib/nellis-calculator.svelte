<script>
  let bidPrice = '';
  let maxPrice = '';
  let finalPrice = '';
  let necessaryPrice = '';
  let state = 'Nevada';

  const taxRates = {
    "Arizona": 0.056,
    "Texas": 0.0625,
    "Nevada": 0.0823
  };

  function validateAndSetBidPrice(value) {
    const onlyNums = value.replace(/[^0-9]/g, '');
    bidPrice = onlyNums;
  }

  function validateAndSetMaxPrice(value) {
    const onlyNums = value.replace(/[^0-9]/g, '');
    maxPrice = onlyNums;
  }

  function calculateBidTotal() {
    if (isNaN(bidPrice) || bidPrice === '') {
      alert(" Oops! That was not a valid number. Try again...");
    } else {
      let price = parseInt(bidPrice);
      price = price + (price * 0.15);
      finalPrice = (price + (price * taxRates[state])).toFixed(2);
    }
  }

  function calculateNecessaryBid() {
    if (isNaN(maxPrice) || maxPrice === '') {
      alert(" Oops! That was not a valid number. Try again...");
    } else {
      let price = parseInt(maxPrice);
      price = price - (price * 0.15);
      necessaryPrice = (price - (price * taxRates[state])).toFixed(2);
    }
  }
</script>

<style>
  /* Your CSS goes here */
</style>

<div class="landing-block">
  <h1 class="tool-name">Nellis Auction Customer Bid Tools</h1>
  <p class="tool-description">Easily calculate your bid price based on state taxes and other factors. Stay informed and make better bidding decisions!</p>
</div>

<div class="Container">
  <div>
    <h2>Set your state</h2>
    <select bind:value={state}>
      {#each Object.keys(taxRates) as stateKey (stateKey)}
        <option value={stateKey}>{stateKey}</option>
      {/each}
    </select>
  </div>
</div>

<div class="Container">
  <div class="App">
    <h2>If you bid:</h2>
    <input type="text" placeholder="Enter your bid price" bind:value={bidPrice} on:input={e => validateAndSetBidPrice(e.target.value)} />
    <h2> Your total price will be:</h2>
    <button on:click={calculateBidTotal}>Calculate</button>
    <p>Total Price: <b>{finalPrice}</b></p>
  </div>

  <div class="App">
    <h1> Maximum spend calculator</h1>
    <h3>Set your maximum budget</h3>
    <input type="text" placeholder="Enter your max price" bind:value={maxPrice} on:input={e => validateAndSetMaxPrice(e.target.value)} />
    <button on:click={calculateNecessaryBid}>Calculate</button>
    <p>Necessary Price: <b>{necessaryPrice}</b></p>
  </div>
</div>
