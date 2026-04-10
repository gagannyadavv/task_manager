import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { taskRouter } from './routes/task.routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())

// Serve React production build
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')))

// API routes
app.use('/api', taskRouter)

// Serve React app for all non-API routes (SPA fallback)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'dist', 'index.html'))
})

export { app }