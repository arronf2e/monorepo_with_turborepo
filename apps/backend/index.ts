import express from 'express'
import cors from 'cors'

import { Blog } from '@tm/types'

const app = express()
const port = process.env.PORT || 8009

app.get('/blogs', (req, res) => {
  const blogs: Blog[] = [
    { id: '1', title: 'Blog 1', content: 'Content 1' },
    { id: '2', title: 'Blog 2', content: 'Content 2' },
    { id: '3', title: 'Blog 3', content: 'Content 3' },
    { id: '4', title: 'Blog 4', content: 'Content 4' },
  ]
  res.json({ blogs })
})

app.listen(port, () => console.log(`Backend server listening on http://localhost:${port}`))