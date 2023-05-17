import fastify from 'fastify'

const app = fastify()

// HTTP Method: GET, POST, PUT, PATCH, DELETE

app.post('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http:/localhost:3333')
  })
