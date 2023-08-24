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
    let price = parseFloat(maxPrice); // Convert the string to a float
    necessaryPrice = (price / (1 + 0.15) / (1 + taxRates[state])).toFixed(2);
  }
}
</script>

<style>
  /* Your CSS goes here */
  h1 {
    font-size: 3rem;
    font-weight: 900;
    line-height: 0.75;
    color: #f76027;
    align-self: center;
  }
</style>

<div class="landing-block">
  <h1 class="tool-name">Nellis Auction Customer Bid Tools</h1>
  <p class="tool-description">Easily calculate your bid price based on state taxes and Nellis' buyer premium. Stay informed and make better bidding decisions!</p>
</div>

<section>
<div class="Container">
  <div>
    <h2>First, set your state</h2>
    <select bind:value={state}>
      {#each Object.keys(taxRates) as stateKey (stateKey)}
        <option value={stateKey}>{stateKey}</option>
      {/each}
    </select>
  </div>
</div>
</section>


<section>
  <h1>Final price calculator</h1>
    <h3>ENTER BID PRICE:</h3>
    <input type="text" placeholder="Enter your bid price" bind:value={bidPrice} on:input={e => validateAndSetBidPrice(e.target.value)} />
    
    <button on:click={calculateBidTotal}>Calculate</button>
    <h3> TOTAL PRICE: <b>{finalPrice}</b></h3>
  </section>

<section>
  <div class="App">
    <h1> Maximum spend calculator</h1>
    <h3>SET MAXIMUM BUDGET</h3>
    <input type="text" placeholder="Enter your max price" bind:value={maxPrice} on:input={e => validateAndSetMaxPrice(e.target.value)} />
    <button on:click={calculateNecessaryBid}>Calculate</button>
    <h3>MAXIMUM BID: <b>{necessaryPrice}</b></h3>
  </div>
</section>

