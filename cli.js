#!/usr/bin/env node
'use strict'

var meow = require('meow')
var ghDescription = require('./')
var Promise = require('bluebird')
const ghauth = Promise.promisify(require('ghauth'))
const authOptions = {
  configName: 'ghauth',
  note: 'Set and get a GitHub repository description',
  userAgent: 'ghDesc'
}

var cli = meow([`
  Usage
    $ gh-description [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ gh-description
    unicorns & rainbows
    $ gh-description ponies
    ponies & rainbows
`, {
  alias: {}
}])

Promise.try(() => {
  return ghauth(authOptions)
}).then((authData) => {
  return ghDescription(cli.input, cli.flags, authData.token)
}).then(function (response) {
  console.log(response)
})
