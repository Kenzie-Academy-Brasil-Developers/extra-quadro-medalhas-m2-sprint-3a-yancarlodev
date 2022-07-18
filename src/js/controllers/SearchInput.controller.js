import { competitorsList } from "../database/competitorsList.js";
import MedalTable from "../views/MedalTable.view.js";

export default class SearchInput {
  static getUserInput() {
    const searchInput = document.querySelector("#search-input");
    const searchForm = document.querySelector(".search-form");

    searchForm.addEventListener("input", (event) => {
      event.preventDefault();

      const userInput = searchInput.value;

      const searchResult = competitorsList.filter(({ country }) =>
        country.toUpperCase().includes(userInput.toUpperCase())
      );

      MedalTable.renderAllCompetitors(searchResult);
    });
  }
}
