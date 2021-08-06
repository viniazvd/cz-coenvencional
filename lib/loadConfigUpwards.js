const findUp = require('find-up')
const loadConfig = require('./loadConfig')

module.exports = filename => findUp(filename).then(loadConfig)