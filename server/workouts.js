const workouts = require('./data/workouts.json')

module.exports = function(fastify) {
  fastify.get('/workouts', async (request, reply) => {
    try {
      return workouts
    } catch (error) {
      reply.status(500).send({ msg: 'Could not load workouts', error })
    }
  })
}
