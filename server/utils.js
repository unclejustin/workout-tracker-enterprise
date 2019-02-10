const fs = require('fs')

const writeJson = (path, data) =>
  fs.writeFile(path, JSON.stringify(data, null, 2))

module.exports = {
  writeJson,
}
