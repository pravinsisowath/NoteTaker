let express = require('express')
let api = require('./routes/api')
let view = require('./routes/view')

const app = express()
let PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use(api)
app.use(html)

app.listen(PORT, function() {
    console.log(PORT)
  })