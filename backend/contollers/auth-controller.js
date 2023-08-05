import AuthService from "../services/auth-service.js"

class AuthController {
    async registration(req, res) {
        try {
            const {email, password, name, surname, fatherName, telephone, birthdate, card} = req.body
            const userData = await AuthService.registration(email, password, name, surname, fatherName, telephone, birthdate, card)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            console.log('Ошибка!')
            console.log(e)
        }
    }
    async login(req, res) {
        try {
            const {email, password} = req.body
            const userData = await AuthService.login(email, password)

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            console.log(e)
        }
    }
    async logout(req, res) {
        try {
            const {refreshToken} = req.cookies
            const token = await AuthService.logout(refreshToken)
            
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            console.log(e)
        }
    }
    async activate(req, res) {
        try {
            const activationLink = req.params.link;
            await AuthService.activate(activationLink)

            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            console.log(e)
        }
    }
    async refresh(req, res) {
        try {
            const {refreshToken} = req.cookies
            const userData = await AuthService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)

        } catch (e) {
            console.log(e)
        }
    }
    async getUsers(req, res) {
        try {
            const users = await AuthService.getAllUsers();
            return res.json(users);
        } catch (e) {
            console.log(e)
        }
    }
}

export default new AuthController()