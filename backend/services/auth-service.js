import bcryptjs from 'bcryptjs'
import * as uuid from 'uuid'
import UserModel from '../schemes/user-model.js'
import MailService from './mail-service.js'
import UserDto from '../dtos/user-dto.js'
import tokenService from './token-service.js'
import ApiError from '../exceptions/api-error.js'
import valid from 'card-validator'

class AuthService {
    async registration(email, password, name, surname, fatherName, telephone, birthdate, card, isMailing) {
        
        const candidateEmail = await UserModel.findOne({email})
        const candidateTelephone = await UserModel.findOne({telephone})

        if(!valid.number(card).isValid) throw ApiError.BadRequest(`Некоректный номер карты`)
        if(candidateEmail) throw ApiError.BadRequest(`Пользователь с таким почтовым адресом: ${email} , уже существует`)
        if(candidateTelephone) throw ApiError.BadRequest(`Номер телефона ${telephone} уже используется`)

        const hashPassword = await bcryptjs.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await UserModel.create({email, password: hashPassword, name, surname, fatherName, telephone, birthdate, card, activationLink, isMailing})
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`)
        
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return{...tokens, user: userDto}
    }
    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if(!user) {
            throw ApiError.BadRequest('Некоректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }
    async login(email, password) {
        const user = await UserModel.findOne({email})
        if(!user) {
            throw ApiError.BadRequest(`Пользователь с таким почтовым адресом: ${email}, не найден`)
        }
        const isPassEquals = await bcryptjs.compare(password, user.password)
        if(!isPassEquals) {
            throw ApiError.BadRequest('Пароль указан неверно')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return{...tokens, user: userDto}
    }
    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }
    async refresh(refreshToken) {
        if(!refreshToken){
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{...tokens, user: userDto}
    }
    async getAllUsers() {
        const users = await UserModel.find()
        return users
    }
}

export default new AuthService()