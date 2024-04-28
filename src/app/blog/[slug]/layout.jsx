import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      {children}
      {/* this will be only added for the children of blog page */}
      {/* <h1>i am footer of blog page</h1> */}
    </div>
  )
}

export default layout
