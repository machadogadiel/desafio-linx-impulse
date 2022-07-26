import React from 'react'
import style from './Input.module.css'

const TextInput = ({ id, label, type }) => {
  const { input, inputLabel, inputWrapper } = style

  return (
    <div className={inputWrapper}>
      <label className={inputLabel} htmlFor={id}>
        {label}

      </label>

      <input
        className={input}
        type={type != null ? 'text' : type}
        id={id}
      />

    </div>
  )
}

export default TextInput