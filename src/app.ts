import express from 'express'

const app = express()

app.use('/hello', (_req, res) => {
  res.status(200)
  res.end('world')
})

export default app
