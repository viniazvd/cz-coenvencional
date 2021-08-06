const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

export default (filename) =>
  readFile(filename, 'utf8')
    .then(JSON.parse)
    .then(obj => obj && obj.config && obj.config['cz-emoji'])
    .catch(() => null)