import axios from "axios"

class CitiesController{
    async getAll(req, res) {
        try {
            const {q, need} = req.query
            const citiesURL = `https://api.vk.com/method/database.getCities?country_id=1&q=${q}&need_all=${need}&access_token=${process.env.VKapiAccessToken}&v=5.131&count=200`
            const cities = await axios.get(citiesURL).then(response => response.data)
            console.log(cities)
            res.status(200).json(cities.response.items)
        } catch (e) {
            console.log(e)
        }
    }
}



export default new CitiesController()