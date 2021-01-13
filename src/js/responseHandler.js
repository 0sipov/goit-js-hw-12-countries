import fetchCountries from "./fetchCountries.js";
import alerts from "./alert.js";
import cardCountry from "../templates/cardCountry.hbs";
import listCountries from "../templates/listCountries.hbs";
import refs from "./refs.js";

function responseHandler(input) {
  fetchCountries(input).then((array) => {
    if (array.length === undefined) {
      alerts.errorNotFound();
    } else if (array.length > 10) {
      alerts.errorTooManyResults();
    } else if (array.length === 1) {
      refs.countryContainerRef.innerHTML = "";
      const listCountriesTemplate = cardCountry(array);
      console.log(array);
      refs.countryContainerRef.innerHTML = listCountriesTemplate;
    } else {
      refs.countryContainerRef.innerHTML = "";
      const listCountriesTemplate = listCountries(array);
      refs.countryContainerRef.innerHTML = listCountriesTemplate;
    }
  });
}

export default responseHandler;
