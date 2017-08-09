import test from 'ava'
import fn from './'

test('get description', t => {
  return fn('RichardLitt/gh-description').then(result => {
    t.deepEqual(result, {method: 'get', description: 'Set and get a GitHub repository description'})
  })
})

test('patch description', t => {
  return fn('RichardLitt/gh-description', 'Set and get a GitHub repository description').then(result => {
    t.deepEqual(result, {method: 'patch', description: 'Set and get a GitHub repository description'})
  })
})
