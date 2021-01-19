const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (reqm, res) => res.send('Voce esta na rota de atendimentos e esta realizando um get'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('Post atendimento')
    })
}

