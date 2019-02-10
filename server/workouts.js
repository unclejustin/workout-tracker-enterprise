const workouts = require('./data/workouts.json')
const utils = require('./utils')

module.exports = function(fastify) {
  utils.getItems(fastify, 'workouts', workouts)
}
