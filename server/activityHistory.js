const activityHistory = require('./data/activityHistory.json')

module.exports = function(fastify) {
  fastify.get('/activityHistory', async (request, reply) => {
    try {
      return activityHistory
    } catch (error) {
      reply.status(500).send({ msg: 'Could not load activityHistory', error })
    }
  })
}
