import { config } from "../../Constantes"
const urlHousingsAll: string = config.url
console.log(urlHousingsAll)
const getAll = async () => {
    let response
    let data: Array

    try {
        response = await fetch(`${urlHousingsAll}data.json`)
        data = await response.json()

    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }

    return data
};


const getById = async (id) => {
    let response
    let allData
    let data

    try {
        response = await fetch(`${urlHousingsAll}/data.json`)
        allData = await response.json()
        data = allData.filter(housing => housing.id === id)[0]

    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }

    return data
};

const HousingService = {
    getAll,
    getById
};
export default HousingService;
