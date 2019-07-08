//Homepage for blog using ButterCMS

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import butter from './butter-client'

class Blog extends Component {
  state = {
    meta: {},
    data: []
  }
  async componentDidMount () {
    const { match } = this.props
    let page = match.params.page || 1

    const resp = await butter.post.list({ page: page, page_size: 10 })
    this.setState(resp.data)
  }
  render () {
    const { next_page, previous_page } = this.state.meta
    const maxPostBodyLength = 50;

    return (
      <section>
      <h1>Resources</h1>
      <p>Check out our latest blog posts!</p>
      <div>
        {this.state.data.map((post, key) => {
          return (
            <div key={key}>
              <Link to={`/blog/posts/${post.slug}`}>{post.title}</Link>
              <div>
                { post.body.length > maxPostBodyLength ?
                  (
                  <div>
                    <p>{post.body.substr(0, maxPostBodyLength)}...</p>
                    <Link to={`/blog/posts/${post.slug}`}><p>Read more...</p></Link>
                  </div>
                ):
                  <div>{post.body}</div>
              }
              </div>
            </div>
          )
        })}

        <br />

        <div>
            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}
            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
          </div>
      </div>
      </section>
    )
  }
}

export default Blog
