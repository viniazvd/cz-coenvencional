const path = require('path')
const homedir = require('homedir')

const types = require('./types.json')

import loadConfig from './loadConfig'
import loadConfigUpwards from './loadConfigUpwards'

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