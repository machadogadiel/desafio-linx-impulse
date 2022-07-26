import React from 'react'
import style from './Title.module.css'

const Title = ({ text }) => {
  const { title, titleText } = style

  return (
    <div className={title}>
      <span className={titleText}>{text}</span>
    </div>
  )
}

export default Title