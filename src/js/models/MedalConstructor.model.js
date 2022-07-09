import Api from './Api.model.js'
import { competitorsList } from '../database/competitorsList.js'

export default class MedalConstructor {

    constructor(id, country, flagImage, goldMedal, silverMedal, bronzeMedal) {
        this.id = id
        this.country = country
        this.flagImage = flagImage
        this.goldMedal = goldMedal
        this.silverMedal = silverMedal
        this.bronzeMedal = bronzeMedal
    }

    static async createCompetitors() {
        const apiResponse = await Api.getAllMedalsData()

        apiResponse.forEach(({id, country, flag_url, medal_bronze, medal_gold, medal_silver}) => {
            const newCountry = new MedalConstructor(id, country, flag_url, medal_bronze, medal_gold, medal_silver)
            
            competitorsList.push(newCountry)
        })
    }

    static positionOrdering() {
        const positionSortedCompetitors = [...competitorsList]

        positionSortedCompetitors.sort((currentCompetitor, nextCompetitor) => {
            const currentCompetitorTotalMedals = currentCompetitor.goldMedal + currentCompetitor.silverMedal + currentCompetitor.bronzeMedal
            const nextCompetitorTotalMedals = nextCompetitor.goldMedal + nextCompetitor.silverMedal + nextCompetitor.bronzeMedal

            if(nextCompetitorTotalMedals - currentCompetitorTotalMedals === 0) {
                return nextCompetitor.goldMedal - currentCompetitor.goldMedal
            }

            return nextCompetitorTotalMedals - currentCompetitorTotalMedals
        })

        return positionSortedCompetitors
    }

    static goldMedalOrdering() {
        const positionSortedCompetitors = [...competitorsList]

        positionSortedCompetitors.sort((currentCompetitor, nextCompetitor) => {
            return nextCompetitor.goldMedal - currentCompetitor.goldMedal
        })

        return positionSortedCompetitors
    }

    static silverMedalOrdering() {
        const positionSortedCompetitors = [...competitorsList]

        positionSortedCompetitors.sort((currentCompetitor, nextCompetitor) => {
            return nextCompetitor.silverMedal - currentCompetitor.silverMedal
        })

        return positionSortedCompetitors
    }

    static bronzeMedalOrdering() {
        const positionSortedCompetitors = [...competitorsList]

        positionSortedCompetitors.sort((currentCompetitor, nextCompetitor) => {
            return nextCompetitor.bronzeMedal - currentCompetitor.bronzeMedal
        })

        return positionSortedCompetitors
    }
}