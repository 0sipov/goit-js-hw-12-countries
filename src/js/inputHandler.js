import refs from "./refs";
import debounce from "lodash.debounce";
import responseHandler from "./responseHandler.js";

export default refs.countrySearchRef.addEventListener(
  "input",
  debounce((e) => {
    responseHandler(e.target.value);
  }, 700),
);
