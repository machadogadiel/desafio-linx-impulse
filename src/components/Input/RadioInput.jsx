import React from 'react'
import style from './Input.module.css'

const RadioInput = ({ value }) => {
  const { radio, inputLabel, radioWrapper } = style

  return (
    <div className={radioWrapper}>
      <input className={radio} type='radio' value={value}>
      </input>

      <label className={inputLabel}>

        {value}
      </label>
    </div>
  )
}

export default RadioInput