import React from 'react'
import Link from 'next/link'

const notFound = () => {
  return (
    <div>
        <h1>Not found</h1>
        <p>sorry we cannot find the given page</p>
        <Link href="/">Return home page</Link>
      
    </div>
  )
}

export default notFound
