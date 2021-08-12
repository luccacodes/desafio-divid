import React from 'react'

import './styles.scss';

const Input = ({ className, placeholder, value, onChange }) => {

  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;
