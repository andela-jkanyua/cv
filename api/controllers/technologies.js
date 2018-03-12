const Technology = require('../models').Technology
const Boom = require('boom')

module.exports = class Technologies {
  static async getAll (request, response) {
    const Technologies = await Technology.findAll({attributes: ['title', 'summary']})
    if (Technologies.length === 0) return Boom.notFound('No technologies found.')
    return Technologies
  }
}
