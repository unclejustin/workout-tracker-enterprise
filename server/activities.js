const activities = require('./data/activities.json')

module.exports = function(fastify) {
  fastify.get('/activities', async (request, reply) => {
    try {
      return activities
    } catch (error) {
      reply.status(500).send({ msg: 'Could not load activities', error })
    }
  })
}
