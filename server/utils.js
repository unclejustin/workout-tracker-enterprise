const fs = require('fs')
const uuid = require('uuid')

const writeJson = (path, data) =>
  fs.writeFile(path, JSON.stringify(data, null, 2))

// Get all items
const getItems = (fastify, path, data) => {
  fastify.get('/' + path, async (request, reply) => {
    try {
      return data
    } catch (err) {
      reply.status(500).send(`Could not load ${path}. ${err.message}`)
    }
  })
}

// Get item by id
const getItem = (fastify, path, data) => {
  fastify.get(`/${path}/:id`, async (request, reply) => {
    try {
      return data.find((p) => p.id === request.params.id)
    } catch (err) {
      reply.status(500).send(`Could not load ${path}. ${err.message}`)
    }
  })
}

// Create new item
const createItem = (fastify, path, data) => {
  fastify.post('/' + path, async ({ body }, reply) => {
    try {
      const item = {
        id: uuid(),
        ...body,
      }
      data.push(item)
      writeJson(`./data/${path}.json`, data)
      reply.send(item)
    } catch (err) {
      reply.status(500).send(`Could not save ${path}. ${err.message}`)
    }
  })
}

// Update item
const updateItem = (fastify, path, data) => {
  fastify.put('/' + path, async (request, reply) => {
    try {
      const item = request.body
      const itemId = item.id
      const index = data.findIndex((i) => i.id === itemId)

      if (index === -1) {
        throw new Error(`Cannot find ${path} with id: ${itemId}`)
      }

      data.splice(index, 1, item)
      writeJson(`./data/${path}.json`, data)
      reply.send({ msg: `Updated ${path}: ${item.title}`, item })
    } catch (err) {
      reply.status(500).send(`Could not update ${path}. ${err.message}`)
    }
  })
}

// Delete item
const deleteItem = (fastify, path, data) => {
  fastify.delete('/' + path, async ({ body }, reply) => {
    try {
      const { itemId } = body
      const index = data.findIndex((i) => i.id === itemId)

      if (index === -1) {
        throw new Error(`Cannot find ${path} with id: ${itemId}`)
      }

      const item = { ...data[index] }
      data.splice(index, 1)
      writeJson(`./data/${path}.json`, data)
      reply.send({ msg: `Deleted ${path}: ${item.title}`, item })
    } catch (err) {
      reply.status(500).send(`Could not delete ${path}. ${err.message}`)
    }
  })
}

module.exports = {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
  writeJson,
}
