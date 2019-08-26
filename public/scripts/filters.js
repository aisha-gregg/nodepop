import { fetchAds } from "./fetch.js";
import { displayAds } from "./displayAds.js";

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
    displayAds(await fetchAds(filter.name));
  });
});
