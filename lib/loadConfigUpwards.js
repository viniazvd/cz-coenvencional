const findUp = require('find-up')

export default filename => findUp(filename).then(loadConfig)