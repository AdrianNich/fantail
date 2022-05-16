const path = require('path')
const express = require('express')
require('dotenv').config()
const apiKey = process.env.API_KEY

// import cricket from '../client/components/Cricket'

// const fetch = require('node-fetch')

const request = require('superagent')

// const welcome = require('./routes/welcome')

const server = express()

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.get('/find-a-player/:name', (req, res) => {
    const name = req.params.name
    // eslint-disable-next-line promise/catch-or-return
    request.get(`https://unofficial-cricbuzz.p.rapidapi.com/players/search?plrN=${name}`)
    .set('X-RapidAPI-Host', 'unofficial-cricbuzz.p.rapidapi.com')
    .set('X-RapidAPI-Key', `${apiKey}`)
    .then((response) => {
      res.json(response.body)
      return response.body
    })    
})

server.get('/Profile/:id', (req, res) => {
    const id = req.params.id
    // eslint-disable-next-line promise/catch-or-return
    request.get(`https://unofficial-cricbuzz.p.rapidapi.com/players/get-info?playerId=${id}`)
    .set('X-RapidAPI-Host', 'unofficial-cricbuzz.p.rapidapi.com')
    .set('X-RapidAPI-Key', `${apiKey}`)
    .then((response) => {
      // console.log(response.body.teams)
      res.json(response.body)
      return response.body
    })
})

server.get('/Teams/:type', (req, res) => {
  // eslint-disable-next-line promise/catch-or-return
  request.get(`https://unofficial-cricbuzz.p.rapidapi.com/teams/list?matchType=domestic`)
  .set('X-RapidAPI-Host', 'unofficial-cricbuzz.p.rapidapi.com')
  .set('X-RapidAPI-Key', `${apiKey}`)
  .then((response) => {
    // console.log(response.body.teamData)
    res.json(response.body)
    return response.body.TeamData
  })
})

module.exports = server
