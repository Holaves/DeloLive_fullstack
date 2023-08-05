import nodemailer from 'nodemailer'

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            service: 'Outlook365',
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: 'testika22@outlook.com',
                pass: 'Good55555!'
            },
            tls: {
                ciphers:'SSLv3'
            }
        })
    }

    async sendActivationMail(to, link) {
        console.log('Send mail')
        await this.transporter.sendMail({
            from: 'testika22@outlook.com',
            to: to,
            subject: `Активация вашего аккаунта на ${process.env.API_URL}`,
            html:
            `
                <div>
                    <h1>Для активации аккаунта вашего аккаунта <b>${process.env.APP_NAME}</b> перейдите по ссылке:</h1>
                    <a href="${link}" style="text-decoration: none; display:flex;  font-size: 18px; color: blue">${link}</a>
                </div>
                <hr>
                <div style="display: flex; justify-content: center">С уважением команда ${process.env.APP_NAME}.</div>
            `
        })
    }
}

export default new MailService()