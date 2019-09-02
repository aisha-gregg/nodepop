export async function fetchAds(tag, price, minPrice, maxPrice, orderBy, type) {
  let url = "http://localhost:3000/ads";

  if (
    tag !== undefined ||
    price !== undefined ||
    minPrice !== undefined ||
    maxPrice !== undefined ||
    orderBy !== undefined ||
    type !== undefined
  ) {
    url += "?";
  }

  if (tag !== undefined) {
    url += "tag=" + tag;
  }

  if (tag !== undefined && price !== undefined) {
    url += "&";
  }

  if (price !== undefined) {
    url += "price=" + price;
  }

  if (minPrice !== undefined && maxPrice === undefined) {
    url += "minPrice=" + minPrice;
  }

  if (maxPrice !== undefined && minPrice === undefined) {
    url += "maxPrice=" + maxPrice;
  }

  if (minPrice !== undefined && maxPrice !== undefined) {
    url += "maxPrice=" + maxPrice + "&" + "minPrice=" + minPrice;
  }

  if (orderBy !== undefined) {
    url += "orderBy=" + orderBy;
  }

  if (type !== undefined) {
    url += "type=" + type;
  }

  const response = await fetch(url);
  const ads = await response.json();

  const htmlAds = ads
    .map(function(ad) {
      let type = "Se vende";
      if (ad.article.type === 1) {
        type = "Se vende";
      }
      if (ad.article.type === 2) {
        type = "Se busca";
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
