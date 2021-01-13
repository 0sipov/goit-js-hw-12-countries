import alerts from "./alert.js";
import refs from "./refs.js";

function fetchCountry(countryName) {
  refs.countryContainerRef.innerHTML = "";
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      if (refs.countrySearchRef.value.length === 0) {
        alerts.errorEmptyQueryInput();
      } else {
        alerts.errorQuery();
      }
    });
}
export default fetchCountry;
