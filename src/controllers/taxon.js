const taxonRouter = require('express').Router()
const Taxon = require('../models/taxon')

taxonRouter.get('/', async (request, response) => {
  const taxa = await Taxon
    .find({})
  console.log('retrieved taxa: ', taxa)
  response.json(taxa.map(Taxon.format))
})

module.exports = taxonRouter
