const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('I hope this works!')
})

app.listen(port, () => {

})

app.use(express.static('app'))

