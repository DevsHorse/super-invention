const Card = require('../models/Card')
const {Router} = require('express')
const router = Router()
const Utils = require('../utils.js')

router.get('/cards', (req, res) => {
  res.send({
    data: Utils.getDataDB('cards'),
  })
})

router.post('/cards', (req, res) => {
  const cards = Utils.getDataDB('cards')
  const newCard = new Card(req.body)

  if (!newCard.isValid()) {
    res.status(400)
    res.send({error: 'Validation error'})
    return
  }

  Utils.writeDataToDB('cards', [
    ...cards,
    {...newCard.card},
  ])
  res.send({
    data: [newCard.card]
  })
})

router.delete('/cards/:id', (req, res) => {
  const cards = Utils.getDataDB('cards')
  const deletedCard = cards.find(c => c.id === +req.params.id)

  if (!deletedCard) {
    res.status(404)
    res.send({error: `Card\'s id:${req.params.id} - not found`})
    return
  }

  Utils.writeDataToDB('cards', cards.filter(c => c.id !== +req.params.id))
  res.status(200)
  res.send({message: `Card id:${req.params.id} deleted`})
})

module.exports = router
