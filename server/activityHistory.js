const activityHistory = require('./data/activityHistory.json')
const utils = require('./utils')

module.exports = function(fastify) {
  utils.createItem(fastify, 'activityHistory', activityHistory)
  utils.deleteItem(fastify, 'activityHistory', activityHistory)
  utils.getItem(fastify, 'activityHistory', activityHistory)
  utils.getItems(fastify, 'activityHistory', activityHistory)
  utils.updateItem(fastify, 'activityHistory', activityHistory)
}
