const mongoose = require('mongoose')

const taxon = new mongoose.Schema({
  name: String
})

taxon.statics.format = (taxon) => {
  return {
    id: taxon._id,
    name: taxon.name
  }
}

const Taxon = mongoose.model('taxon', taxon)

module.exports = Taxon

