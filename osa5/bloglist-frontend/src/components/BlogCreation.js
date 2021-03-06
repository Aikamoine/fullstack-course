import { useState } from 'react'

const BlogCreation = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const createNew = async (event) => {
    event.preventDefault()
    const blog = {
      title: title,
      author: author,
      url: url
    }
    createBlog(blog)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <>
      <h3>create new</h3>
      <form onSubmit={createNew}>
        <div>
                    title
          <input
            id='title'
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
                    author
          <input
            id='author'
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
                    url
          <input
            id='url'
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button id='create-button' type="submit">create</button>
      </form>
    </>
  )
}
export default BlogCreation