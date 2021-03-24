import React, { useState } from 'react'
import { Validation } from './Validation'

interface IProps {
  value: string
  labelText: string
  setValue: (value: string) => void
  name?: string
  id?: string
}

export const Field: React.FC<IProps> = (
    {value, labelText, children, setValue, name = '', id = ''}
  ) => {

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        name={name}
        id={id}
        onChange={e => setValue(e.target.value)}
        value={value}/>
      {children}
    </div>
  )
}