const fastify = require('fastify')({ logger: true })

// ==============================================================
// Routes
// ==============================================================

require('./workouts')(fastify)
require('./activities')(fastify)
require('./activityHistory')(fastify)

// ==============================================================
// Run server
// ==============================================================
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
