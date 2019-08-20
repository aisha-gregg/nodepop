const workFilter = document.querySelector("#filterSelect");
workFilter.addEventListener("click", async function() {
  const results = await Ad.find({}).then();
  alert(results);
});
