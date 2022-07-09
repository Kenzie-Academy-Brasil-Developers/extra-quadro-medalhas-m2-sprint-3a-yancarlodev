export default class Api {
    static async getAllMedalsData() {
        const baseURL = 'https://kenzie-olympics.herokuapp.com/paises'

        const apiResponse = await fetch(baseURL).then(response => response.json()).catch(error => error)
        
        return apiResponse
    }
}