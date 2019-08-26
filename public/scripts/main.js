import { fetchAds } from "./fetch.js";
import { displayAds } from "./displayAds.js";

fetchAds().then(ads => {
  displayAds(ads);
});
