
const urlHousingsAll: string =  "./data.json"

const getAll = async () => {
    let response
    let data: Array

    try {
        response = await fetch(urlHousingsAll)
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
        response = await fetch(urlHousingsAll)
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
