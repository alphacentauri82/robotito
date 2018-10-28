import express from 'express'

// Require API routes
import test from './routes/test'

// Create express instnace
const app = express()

// Import API Routes
app.use(test)

// Export the server middleware
export const path = '/api'
export const handler = app
