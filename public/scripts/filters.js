const motorFilter = {
  tag: document.querySelector("#motor"),
  name: "Motor"
};
const mobileFilter = {
  tag: document.querySelector("#mobile"),
  name: "Mobile"
};
const workFilter = {
  tag: document.querySelector("#work"),
  name: "Work"
};
const lifeFilter = {
  tag: document.querySelector("#lifestyle"),
  name: "Lifestyle"
};

const filters = [motorFilter, mobileFilter, workFilter, lifeFilter];

filters.forEach(function(filter) {
  filter.tag.addEventListener("click", async function() {
    const response = await fetch(
      `http://localhost:3000/ads?tag=${filter.name}`
    );
    const ads = await response.json();

    const mobileAds = document.querySelector(".mobile-ads");
    mobileAds.innerHTML = ads
      .map(function(ad) {
        return `
        <div class="product-info">
        <img
        src="data:image/jpeg;base64,${ad.article.photo}"
      />
          <span>${ad.article.name}</span>
          <span>${ad.article.id}</span>
          <span>${ad.id}</span>
          <span>${ad.article.description}</span>
        </div>
      `;
      })
      .join("");
  });
});
