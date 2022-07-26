import React from 'react'
import style from './Button.module.css'

const Button = ({ type, text, href, clickHandler }) => {
  const { primaryButton, secondaryButton } = style

  return (
    <a href={href} style={{ all: 'unset' }}>
      <button className={type == 'primary' ? primaryButton : secondaryButton} onClick={clickHandler}>
        {text}
      </button >
    </a>
  )
}

export default Button