const express = require('express')

const PORT = process.env.PORT || 4000

const app = express()

app.listen(PORT, () => {
    console.log(`Server starting on port - ${PORT}`)
})
const date = new Date()

const dd = String(date.getDate()).padStart(2, '0')
const mm = String(date.getMonth() + 1).padStart(2, '0')
const yyyy = date.getFullYear()
const NowDate = mm + '-' + dd + '-' + yyyy


app.get('/api/news', (req, res) => {
    res.json([
        {
            id: 1,
            date: NowDate,
            imageUrl: 'http://',
            description: 'Описание карточки новости1'
        },
        {
            id: 2,
            date: NowDate,
            imageUrl: 'http://',
            description: 'Описание карточки новости2'
        },
        {
            id: 3,
            date: NowDate,
            imageUrl: 'http://',
            description: 'Описание карточки новости3'
        },
    ])
})