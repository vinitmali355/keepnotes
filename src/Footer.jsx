import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div>copyright © {year}</div>
    </footer>
  )
}

export default Footer