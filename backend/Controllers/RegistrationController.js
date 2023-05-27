class RegistrationController{
    async createUser(req, res) {
        try {
            console.log(req.body)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}



export default new RegistrationController()