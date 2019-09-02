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

const sellingFilter = {
  tag: document.querySelector("#selling"),
  name: "1"
};
const searchingFilter = {
  tag: document.querySelector("#searching"),
  name: "2"
};

const rangeFilter = {
  tag: document.querySelector("#filter-range"),
  minPrice: 50,
  maxPrice: 100
};

const overOnehundredFilter = {
  tag: document.querySelector("#filter-over-onehundred"),
  minPrice: 100
};

const minusFiftyfilter = {
  tag: document.querySelector("#filter-less-fifty"),
  maxPrice: 50
};

const exactEurosfilter = {
  tag: document.querySelector("#filter-exact-euros"),
  minPrice: 100,
  maxPrice: 100
};

const filterOptions = [
  overOnehundredFilter,
  minusFiftyfilter,
  exactEurosfilter,
  rangeFilter
];

filterOptions.forEach(function(filterOption) {
  filterOption.tag.addEventListener("click", async function() {
    displayAds(
      await fetchAds(
        undefined,
        undefined,
        filterOption.minPrice,
        filterOption.maxPrice
      )
    );
  });
});

const cheapestFilter = {
  tag: document.querySelector("#filter-cheapest"),
  name: "lowest"
};

const mostExpensivefilter = {
  tag: document.querySelector("#filter-most-expensive"),
  name: "highest"
};

const orderBy = [cheapestFilter, mostExpensivefilter];

orderBy.forEach(function(order) {
  order.tag.addEventListener("click", async function() {
    displayAds(
      await fetchAds(undefined, undefined, undefined, undefined, order.name)
    );
  });
});

const typeFilters = [sellingFilter, searchingFilter];

typeFilters.forEach(function(type) {
  type.tag.addEventListener("click", async function() {
    displayAds(
      await fetchAds(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        type.name
      )
    );
  });
});
