const activities = require('./data/activities.json')
const utils = require('./utils')

module.exports = function(fastify) {
  utils.createItem(fastify, 'activities', activities)
  utils.deleteItem(fastify, 'activities', activities)
  utils.getItem(fastify, 'activities', activities)
  utils.getItems(fastify, 'activities', activities)
  utils.updateItem(fastify, 'activities', activities)
}
