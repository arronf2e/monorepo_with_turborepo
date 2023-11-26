import { useEffect, useState } from 'react'
import { Blog } from '@tm/types'
import axios from 'axios'
import './App.css'

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    axios.get('https://localhost:8009/blogs').then(result => {
      setBlogs(result?.data?.blogs || [])
    })
  }, [])

  return (
    <>
      {blogs.map((blog: Blog) => {
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      })}
    </>
  )
}

export default App
