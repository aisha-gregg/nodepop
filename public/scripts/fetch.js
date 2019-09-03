export async function fetchAds({
  tag,
  price,
  minPrice,
  maxPrice,
  orderBy,
  type
}) {
  let url = "http://localhost:3000/ads";
  const parameters = [
    { value: tag, queryParam: "tag" },
    { value: price, queryParam: "price" },
    { value: minPrice, queryParam: "minPrice" },
    { value: maxPrice, queryParam: "maxPrice" },
    { value: orderBy, queryParam: "orderBy" },
    { value: type, queryParam: "type" }
  ];

  if (
    parameters.some(function(parameter) {
      return parameter !== undefined;
    })
  ) {
    url += "?";
  }

  const parametersWithoutUndefined = parameters.filter(function(parameter) {
    return parameter.value !== undefined;
  });
  const mappedParameters = parametersWithoutUndefined.map(function(parameter) {
    return parameter.queryParam + "=" + parameter.value;
  });
  const joinedParameters = mappedParameters.join("&");

  url += joinedParameters;

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
