import React from 'react'

export default function ProductDetail(props) {
  return (
    <div className="container">
      <header>
          <h1 className="page-title">Product Detail</h1>
      </header>
      <main>
        props.title
      </main>
    </div>
  )
}
