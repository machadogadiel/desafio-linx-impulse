import React from 'react'
import style from './Input.module.css'

const TextInput = ({ id, label, type, pattern }) => {
  const { input, inputLabel, inputWrapper } = style

  return (
    <div className={inputWrapper}>
      <label className={inputLabel} htmlFor={id}>
        {label}

      </label>

      <input
        className={input}
        type={type != null ? type : 'text'}
        pattern={pattern}
        id={id}
      />

    </div>
  )
}

export default TextInput