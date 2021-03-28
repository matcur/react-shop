import React from 'react'
import { useHistory } from 'react-router'

export const Logo: React.FC = () => {
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }

  return (
    <img
      onClick={goHome}
      src="logo.png"
      alt="logo"
      className="logo"/>
  )
}