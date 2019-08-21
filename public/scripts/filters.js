const motorFilter = document.querySelector("#motor");
motorFilter.addEventListener("click", async function() {
  const response = await fetch("http://localhost:3000/ads?tag=Motor");
  const ads = await response.json();

  const motorAds = document.querySelector(".mobile-ads");
  motorAds.innerHTML = ads.map(function(ad) {
    return `
      <div class="product-info">
        <img src="/images/galaxy s6.jpg" alt="" />
        <span>${ad.article.name}</span>
        <span>${ad.article.id}</span>
        <span>${ad.id}</span>
        <span>${ad.article.description}</span>
      </div>
    `;
  });
});

const mobileFilter = document.querySelector("#mobile");
mobileFilter.addEventListener("click", async function() {
  const response = await fetch("http://localhost:3000/ads?tag=Mobile");
  const ads = await response.json();

  const mobileAds = document.querySelector(".mobile-ads");
  mobileAds.innerHTML = ads.map(function(ad) {
    return `
      <div class="product-info">
        <img src="/images/galaxy s6.jpg" alt="" />
        <span>${ad.article.name}</span>
        <span>${ad.article.id}</span>
        <span>${ad.id}</span>
        <span>${ad.article.description}</span>
      </div>
    `;
  });
});

const workFilter = document.querySelector("#work");
workFilter.addEventListener("click", async function() {
  const response = await fetch("http://localhost:3000/ads?tag=Work");
  const ads = await response.json();

  const mobileAds = document.querySelector(".mobile-ads");
  mobileAds.innerHTML = ads.map(function(ad) {
    return `
      <div class="product-info">
        <img src="/images/galaxy s6.jpg" alt="" />
        <span>${ad.article.name}</span>
        <span>${ad.article.id}</span>
        <span>${ad.id}</span>
        <span>${ad.article.description}</span>
      </div>
    `;
  });
});

const lifeFilter = document.querySelector("#life");
lifeFilter.addEventListener("click", async function() {
  const response = await fetch("http://localhost:3000/ads?tag=Lifestyle");
  const ads = await response.json();

  const mobileAds = document.querySelector(".mobile-ads");
  mobileAds.innerHTML = ads.map(function(ad) {
    return `
      <div class="product-info">
        <img src="/images/galaxy s6.jpg" alt="" />
        <span>${ad.article.name}</span>
        <span>${ad.article.id}</span>
        <span>${ad.id}</span>
        <span>${ad.article.description}</span>
      </div>
    `;
  });
});
