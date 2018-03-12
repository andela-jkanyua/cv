const Models = require('../controllers/')

module.exports = [
  {
    method: 'GET',
    path: '/technologies',
    handler: Models.Technologies.getAll
  }
]
