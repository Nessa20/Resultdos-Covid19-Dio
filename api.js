const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    Cache: 'default'
}

function getCountry(country) {
    return fetch('${path/${country}}', headers)
    .then((response) => response.json())
}

export default {
    getCountry
}