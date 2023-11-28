const express = require('express')
const app = express()
const path = require('path');

const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('draw.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})