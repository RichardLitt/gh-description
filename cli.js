#!/usr/bin/env node
'use strict'

const meow = require('meow')
const ghDescription = require('./')
const gitconfig = require('gitconfiglocal')
const pify = require('pify')
const ghauth = pify(require('ghauth'))
const authOptions = {
  configName: 'gh-description',
  note: 'Set and get a GitHub repository description',
  userAgent: 'github.com/RichardLitt/gh-description',
  scopes: ['repo']
}

var cli = meow([`
  Usage
    $ gh-description [input]

  Options
    -e, --enterprise  Specify a different GitHub endpoint

  Examples
    $ gh-description
    Set and get a GitHub repository description
    $ gh-description RichardLitt/gh-description
    Set and get a GitHub repository description
    $ gh-description RichardLitt/gh-description 'ponies and unicorns'
    New description: ponies and unicorns
    $ gh-description RichardLitt/gh-description -e
    New enterprise description: Engage
    $ gh-description RichardLitt/gh-description -e https://scottymcscottface.co.uk
    New enterprise description: Beam Me Up
`], {
  alias: {
    e: 'enterprise'
  }
})

pify(gitconfig)(process.cwd())
.then(config => {
  if (config && config.remote && config.remote.origin && config.remote.origin.url) {
    var url = config.remote.origin.url
    return url.match(/([^/:]+\/[^/.]+)(\.git)?$/)[1]
  }
}).then((res) => {
  if (res && cli.input.length === 0) {
    cli.input[0] = res
  }
  return (cli.input[1]) ? ghauth(authOptions) : { token: null }
}).then((authData) => {
  return ghDescription(cli.input[0], cli.input[1], cli.flags, authData.token)
}).then(function (response) {
  if (!response.method) {
    console.log(response)
  } else if (response.method === 'patch') {
    console.log(`New description:\n${response.description}`)
  } else if (response.method === 'get') {
    console.log(`${response.description}`)
  }
})
