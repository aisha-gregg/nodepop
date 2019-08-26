export async function fetchAds(tag) {
  let url = "http://localhost:3000/ads";

  if (tag !== undefined) {
    url += "?tag=" + tag;
  }

  const response = await fetch(url);
  const ads = await response.json();

  const htmlAds = ads
    .map(function(ad) {
      let type = "selling";
      if (ad.article.type.id === 1) {
        type = "selling";
      } else {
        type = "buying";
      }
      return `
      <div class="product-info">
      <img
      src="data:image/jpeg;base64,${ad.article.photo}"
    />
        <span>${ad.article.name}</span>
        <span>${ad.article.id}</span>
        <span>${ad.id}</span>
        <span>${ad.article.description}</span>
        <span>${type}</span>
        <span>Price: ${ad.article.price}</span>
      </div>
    `;
    })
    .join("");

  return htmlAds;
}
