import React, { useState } from 'react'

interface IProps {
  count: number
  setCount: (value: number) => void
}

export const PositiveCounter: React.FC<IProps> = ({count, setCount}) => {
  const canDecrease = count > 1
  const increase = () => {
    setCount(count + 1)
  }
  const tryDecrease = () => {
    if (canDecrease)
      setCount(count - 1)
  }
  const tryInput = (value: string) => {
    const int = parseInt(value)
    if (Number.isInteger(int)) {
      setCount(int)
    }
  }

  return (
    <div className="product-counter">
      <button onClick={increase}>+</button>
      <input
        className="counter-input"
        value={count}
        onChange={e => tryInput(e.target.value)}/>
      <button
        disabled={!canDecrease}
        onClick={tryDecrease}>-</button>
    </div>
  )
}