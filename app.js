const express = require('express')
const app = express()
app.get('/gadgets', async (request, response) => {
  await response.sendFile('./gadgets.html', {root: __dirname})
})
app.listen(3000)
module.exports = app
