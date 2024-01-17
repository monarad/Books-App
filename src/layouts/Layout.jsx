import React from 'react'
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header >
      <h1>Book App</h1>
      <p>
        <a href='https://botostart.ir'>Botostart </a>  | React.js Full Course
      </p>
    </header>
    {children}
    <footer>Developed by Mona with Love</footer>
    </>
  )
}

export default Layout