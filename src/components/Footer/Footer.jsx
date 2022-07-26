import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  const { footerStyle, triangle } = style

  return (
    <footer className={footerStyle}>
      <div className={triangle}>
      </div>

      <p style={{ color: 'white', textAlign: 'center' }}>Testando suas habilidades em HTML, CSS e JS.<br />
        Linx Impulse<br />
        2019
      </p>
    </footer>
  )
}

export default Footer