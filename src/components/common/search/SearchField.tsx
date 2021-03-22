import React from 'react'

interface IProps {
  input: string
  placeholder?: string
  setInput: (value: string) => void
}

export const SearchField: React.FC<IProps> = ({input, placeholder = "", setInput}) => {
  const clearInput = () => setInput('')

  return (
    <div className="search-field">
      <input 
        type="text"
        className="search-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}/>
      <div 
        className="clear-search-input"
        onClick={clearInput}>+</div>
    </div>
  )
}