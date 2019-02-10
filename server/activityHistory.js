const activityHistory = require('./data/activityHistory.json')
const utils = require('./utils')

module.exports = function(fastify) {
  utils.getItems(fastify, 'activityHistory', activityHistory)
}
