'use strict'
const merge = require('webpack-merge')
const devEnv = require('./prod.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  ENV_NAME: '"测试环境"',
  API_PREFIX: '"/api"' // API前缀
})