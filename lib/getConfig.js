const path = require('path')
const homedir = require('homedir')

const types = require('./types.json')

const loadConfig = require('./loadConfig')
const loadConfigUpwards = require('./loadConfigUpwards')

async function getConfig () {
  const defaultConfig = {
    types,
    symbol: false,
    skipQuestions: [''],
    subjectMaxLength: 75
  }

  const config =
    (await loadConfigUpwards('package.json')) ||
    (await loadConfigUpwards('.czrc')) ||
    (await loadConfig(path.join(homedir(), '.czrc')))

  return { ...defaultConfig, ...config }
}

export default getConfig