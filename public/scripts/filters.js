const motorFilter = document.querySelector("#motor");
motorFilter.addEventListener("click", async function() {
  const response = await fetch("http://localhost:3000/ads?tag=Motor");
  const ads = await response.json();

  const mobileAds = document.querySelector(".mobile-ads");
  mobileAds.innerHTML = ads.map(function(ad) {
    return `
      <div class="product-info">
        <img src="/images/galaxy s6.jpg" alt="" />
        <span>${ad.article.name}</span>
        <span><%= ad.article.id %></span>
        <span><%= ad.id %></span>
        <span><%= ad.article.description %></span>
      </div>
    `;
  });
});
