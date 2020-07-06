let router = require('express').Router()
let server = require('./server/connection')

router.get('/api/notes', (req, res) => {
    server.query('SELECT * FROM notes',(err, notes) => {
        if (err) console.log(err)
        else res.json(notes)
    })
})

router.post('/api/notes', (req, res) => {
    server.query('INSERT INTO notes SET?', (req.body), (err, notes) => {
        if (err) console.log(err)
        else res.json(notes)
    })
})

module.exports = router

