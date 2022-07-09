export default class MedalTable {
    static async renderAllCompetitors(list) {
        const awaitedList = await list
        
        const tableBody = document.querySelector('.table__body')

        tableBody.innerHTML = ''
        
        awaitedList.forEach(({id, country, flagImage, goldMedal, silverMedal, bronzeMedal}, index) => {
            
            const tableRow = document.createElement('tr')
            tableRow.id = id
            
            const positionTd = document.createElement('td')
            positionTd.classList.add('table-data')
            positionTd.innerText = `${index+1}°`

            const countryAndFlagTd = document.createElement('td')
            countryAndFlagTd.classList.add('table-data')

            const countryAndFlagContainer = document.createElement('div')
            countryAndFlagContainer.classList.add('country-flag-container')

            const countryText = document.createElement('p')
            countryText.classList.add('table-data')
            countryText.innerText = country

            const flag = document.createElement('img')
            flag.classList.add('img-flag')
            flag.src = flagImage
            flag.alt = `Bandeira ${country}`

            const goldTd = document.createElement('td')
            goldTd.classList.add('table-data')
            goldTd.innerText = goldMedal

            const silverTd = document.createElement('td')
            silverTd.classList.add('table-data')
            silverTd.innerText = silverMedal

            const bronzeTd = document.createElement('td')
            bronzeTd.classList.add('table-data')
            bronzeTd.innerText = bronzeMedal

            const totalTd = document.createElement('td')
            totalTd.classList.add('table-data')
            totalTd.innerText = goldMedal + silverMedal + bronzeMedal

            countryAndFlagContainer.append(flag, countryText)
            countryAndFlagTd.append(countryAndFlagContainer)
            tableRow.append(positionTd, countryAndFlagTd, goldTd, silverTd, bronzeTd, totalTd)
            tableBody.append(tableRow)
        })
    }
}