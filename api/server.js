const Hapi = require('hapi')
const Routes = require('./routes')

const server = Hapi.server({
  port: 8080,
  host: 'localhost'
})

// add routes

server.route(Routes)

// start server
async function start () {
  try {
    await server.start()
  } catch (err) {
    console.log(err)
    throw err
  }
}

start()
