import MedalConstructor from "../models/MedalConstructor.model.js"
import MedalTable from "../views/MedalTable.view.js"

export default class TableButton {
    static getUserClickOnButton() {
        const tableHeader = document.querySelector('.table__header')

        tableHeader.addEventListener('click', event => {
            if(event.target.tagName === 'BUTTON') {
                if(event.target.innerText === 'Posição') {
                    MedalTable.renderAllCompetitors(MedalConstructor.positionOrdering())
                    
                    MedalTable.changeButtonVisualOnClick(event.target, event.target.childNodes[1])
                } else if (event.target.innerText === 'Ouro') {
                    MedalTable.renderAllCompetitors(MedalConstructor.goldMedalOrdering())

                    MedalTable.changeButtonVisualOnClick(event.target, event.target.childNodes[1])
                } else if (event.target.innerText === 'Prata') {
                    MedalTable.renderAllCompetitors(MedalConstructor.silverMedalOrdering())

                    MedalTable.changeButtonVisualOnClick(event.target, event.target.childNodes[1])
                } else {
                    MedalTable.renderAllCompetitors(MedalConstructor.bronzeMedalOrdering())

                    MedalTable.changeButtonVisualOnClick(event.target, event.target.childNodes[1])
                }
            }
        })
    }
}