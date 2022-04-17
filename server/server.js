const path = require('path')
const express = require('express')
require('dotenv').config()
const apiKey = process.env.API_KEY

// const fetch = require('node-fetch')

const request = require('superagent')

// const welcome = require('./routes/welcome')

const server = express()

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.get('/find-a-player', (req, res) => {
    // eslint-disable-next-line promise/catch-or-return
    request.get('https://unofficial-cricbuzz.p.rapidapi.com/players/search?plrN=Nick%20Kelly')
    .set('X-RapidAPI-Host', 'unofficial-cricbuzz.p.rapidapi.com')
    .set('X-RapidAPI-Key', `${apiKey}`)
    .then((response) => {
    //   console.log(response.body.player)
      res.json(response.body)
      return response.body
    })
    // .then((response) => {
    //    response.player.map((playerNames) => console.log("id: " + playerNames.id + " name: " + playerNames.name))
    //   })
    
})


// eslint-disable-next-line promise/catch-or-return





module.exports = server
