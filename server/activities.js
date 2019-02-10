const activities = require('./data/activities.json')
const utils = require('./utils')

module.exports = function(fastify) {
  utils.getItems(fastify, 'activities', activities)
}
