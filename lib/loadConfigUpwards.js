const findUp = require('find-up')

module.exports = filename => findUp(filename).then(loadConfig)