import SearchInput from "./controllers/SearchInput.controller.js";
import TableButton from "./controllers/TableButton.controller.js";
import MedalConstructor from "./models/MedalConstructor.model.js";
import MedalTable from "./views/MedalTable.view.js";

async function mainScript() {
    await MedalConstructor.createCompetitors()

    MedalTable.renderAllCompetitors(MedalConstructor.positionOrdering())

    SearchInput.getUserInput()

    TableButton.getUserClickOnButton()
}

mainScript()

