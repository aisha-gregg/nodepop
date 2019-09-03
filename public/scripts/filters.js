import { fetchAds } from "./fetch.js";
import { displayAds } from "./displayAds.js";

const motorFilter = {
  element: document.querySelector("#motor"),
  getOptions: function() {
    return {
      tag: "Motor"
    };
  }
};

const mobileFilter = {
  element: document.querySelector("#mobile"),
  getOptions: function() {
    return {
      tag: "Mobile"
    };
  }
};

const workFilter = {
  element: document.querySelector("#work"),
  getOptions: function() {
    return {
      tag: "Work"
    };
  }
};

const lifeFilter = {
  element: document.querySelector("#lifestyle"),
  getOptions: function() {
    return {
      tag: "Lifestyle"
    };
  }
};

const sellingFilter = {
  element: document.querySelector("#selling"),
  getOptions: function() {
    return {
      tag: window.location.hash.substr(1),
      type: "1"
    };
  }
};

const searchingFilter = {
  element: document.querySelector("#searching"),
  getOptions: function() {
    return {
      tag: window.location.hash.substr(1),
      type: "2"
    };
  }
};

const rangeFilter = {
  element: document.querySelector("#filter-range"),
  getOptions: function() {
    return {
      tag: window.location.hash.substr(1),
      minPrice: 50,
      maxPrice: 100
    };
  }
};

const overOnehundredFilter = {
  element: document.querySelector("#filter-over-onehundred"),
  getOptions: function() {
    return {
      tag: window.location.hash.substr(1),
      minPrice: 100
    };
  }
};

const minusFiftyfilter = {
  element: document.querySelector("#filter-less-fifty"),
  getOptions: function() {
    return {
      tag: window.location.hash.substr(1),
      maxPrice: 50
    };
  }
};

const exactEurosfilter = {
  element: document.querySelector("#filter-exact-euros"),
  getOptions: function() {
    return {
      tag: window.location.hash.substr(1),
      minPrice: 100,
      maxPrice: 100
    };
  }
};

const cheapestFilter = {
  element: document.querySelector("#filter-cheapest"),
  getOptions: function() {
    return {
      tag: window.location.hash.substr(1),
      orderBy: "lowest"
    };
  }
};

const mostExpensivefilter = {
  element: document.querySelector("#filter-most-expensive"),
  getOptions: function() {
    return {
      tag: window.location.hash.substr(1),
      orderBy: "highest"
    };
  }
};

const filters = [
  motorFilter,
  mobileFilter,
  workFilter,
  lifeFilter,
  sellingFilter,
  searchingFilter,
  overOnehundredFilter,
  minusFiftyfilter,
  exactEurosfilter,
  rangeFilter,
  cheapestFilter,
  mostExpensivefilter
];

filters.forEach(function(filter) {
  filter.element.addEventListener("click", async function() {
    displayAds(await fetchAds(filter.getOptions()));
  });
});
