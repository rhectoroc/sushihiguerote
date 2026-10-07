import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'

const app = new Hono().basePath('/api')

app.use('*', secureHeaders())
app.use('*', cors())

app.get('/', (c) => {
  return c.json({ message: 'Welcome to Sushihiguerote API!' })
})

const port = 3001
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
