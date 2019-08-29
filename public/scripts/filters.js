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

const cheapestFilter = {
  tag: document.querySelector("#filter-cheapest"),
  name: "cheapest"
};

const mostExpensivefilter = {
  tag: document.querySelector("#filter-most-expensive"),
  name: "mostExpensive"
};

const sellingFilter = {
  tag: document.querySelector("#selling"),
  name: "Selling"
};
const searchingFilter = {
  tag: document.querySelector("#searching"),
  name: "Searching"
};

const cheapestPriceFilter = {
  tag: document.querySelector("#filter-cheapest-prices"),
  name: "Cheapest Prices"
};

const overOnehundredFilter = {
  tag: document.querySelector("#filter-over-onehundred"),
  name: "Over one hundred"
};

const minusFiftyfilter = {
  tag: document.querySelector("#filter-less-fifty"),
  name: "Minus fifty"
};

const exactEurosfilter = {
  tag: document.querySelector("#filter-exact-euros"),
  name: "100"
};

const filterOptions = [
  cheapestFilter,
  mostExpensivefilter,
  sellingFilter,
  searchingFilter,
  cheapestPriceFilter,
  overOnehundredFilter,
  minusFiftyfilter,
  exactEurosfilter
];

filterOptions.forEach(function(filterOption) {
  filterOption.tag.addEventListener("click", async function() {
    displayAds(await fetchAds(undefined, filterOption.name));
  });
});
