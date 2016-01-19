'use strict'

const Octokat = require('octokat')
const Promise = require('bluebird')
var octo

module.exports = function (input, flags, token) {
  if (typeof input[0] !== 'string') {
    throw new TypeError('Expected a string')
  }

  return Promise.resolve().then(() => {
    octo = new Octokat({
      token: process.env.GITHUB_OGN_TOKEN
    })
  }).then(() => {
    var repoName = input[0].split('/')
    if (repoName.length !== 2) {
      throw new Error('Not a valid repo')
    }
    return octo.repos(repoName[0], repoName[1]).fetch()
  }).then(function (result) {
    console.log(result.description)
    if (input[1]) {
      return Promise.try(() => {
        console.log(result.owner.login, result.name, input[1])
        return octo.repos(result.owner.login, result.name).update({
          description: 'test'
        })
      }).then((result) => {
        return result
      }).catch((err) => {
        throw ('Unable to set description', err)
      })
    } else {
      return result.description
    }
  }).catch(function (err) {
    if (err.status === 404) {
      return []
    } else {
      throw ('Could not get GitHub user', err)
    }
  })
}
