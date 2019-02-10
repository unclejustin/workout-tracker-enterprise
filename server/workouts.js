const workouts = require('./data/workouts.json')
const utils = require('./utils')

module.exports = function(fastify) {
  utils.createItem(fastify, 'workouts', workouts)
  utils.deleteItem(fastify, 'workouts', workouts)
  utils.getItem(fastify, 'workouts', workouts)
  utils.getItems(fastify, 'workouts', workouts)
  utils.updateItem(fastify, 'workouts', workouts)
}
