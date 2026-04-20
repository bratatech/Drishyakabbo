import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import posts from '../data/posts.js'

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" subtitle="Thoughts & News" />
      <section className="container list">
        {posts.map(post => (
          <article className="card" key={post.id}>
            <div className="body">
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
              <small>{post.date}</small>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
