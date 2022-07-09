import Api from './Api.model.js'

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
        const competitorsList = []

        apiResponse.forEach(({id, country, flag_url, medal_bronze, medal_gold, medal_silver}) => {
            const newCountry = new MedalConstructor(id, country, flag_url, medal_bronze, medal_gold, medal_silver)
            
            competitorsList.push(newCountry)
        })
        
        return competitorsList
    }
}