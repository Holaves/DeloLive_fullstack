import axios from "axios"
import { VKapiAccessToken } from "../config.js"

class CitiesController{
    async getAll(req, res) {
        try {
            // let fullCities = []
            // let counter = 0
            // console.log('start')
            // for(let offset = 200; offset < 8700; offset = offset + 1000){
            //     let citiesUrl = `https://api.vk.com/method/database.getCities?country_id=1&need_all=1&count=1000&offers=${offset}&access_token=vk1.a.SDHocVYSFPrxUwFO2_4pHfCs134Xek9mMNuBQS6f3iW0reYz2g5Mv5FWXQo90ZRv5lvpgXYqQiyhtE88abo6OwMjBX-csoOe5MX1mYRySjU0K8oTmFVtexl9rBO3Htrihr7P6nvmUEPOtuHuF4qQ8VbaeUn6cYgxpB1cPfcyHLpEAKZ887zrwQtXkb978yFlcmv96RU7URrSqXkSLE70ag&v=5.131`
            //     let resCities = await axios.get(citiesUrl).then(response => response.data)
            //     fullCities = fullCities + JSON.stringify(resCities.response.items)
            //     counter++
            //     console.log('Запись - ' + counter)
            //     // 
            // }
            const {q, need} = req.query
            const citiesURL = `https://api.vk.com/method/database.getCities?country_id=1&q=${q}&need_all=${need}&access_token=${VKapiAccessToken}&v=5.131&count=200`
            const cities = await axios.get(citiesURL).then(response => response.data)
            console.log(cities)
            res.status(200).json(cities.response.items)
        } catch (e) {

        }
    }
}



export default new CitiesController()