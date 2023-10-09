import React from 'react'
import "./style.css"

const Layout = ({children}) => {
  return (
      <div className='container-fluid'>{ children}</div>
  )
}

export default Layout