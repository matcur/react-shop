import React, { useState } from 'react'
import { SearchField } from './SearchField'

interface IProps {
  initInput?: string
  placeholder?: string
  onFind: (input: string) => void
}

export const Search: React.FC<IProps> = ({initInput = "", placeholder = "", onFind}) => {
  const [input, setInput] = useState(initInput)

  return (
    <div className="search-field">
      <SearchField
        input={input}
        setInput={setInput}
        placeholder={placeholder}/>
      <button 
        className="search-btn"
        onClick={e => onFind(input)}>Find</button>
    </div>
  )
}