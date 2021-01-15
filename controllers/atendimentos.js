module.exports = app => {
    app.get('/atendimentos', (reqm, res) => res.send('Voce esta na rota de atendimentos e esta realizando um get'))

    app.post('/atendimentos', (req, res) => {
    console.log(req.body)
    res.send('Voce esta na rota de atendimentos e esta realizando um post')
    })
}