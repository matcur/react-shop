import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Server } from '../../api/server'

export const LogIn: React.FC = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory()
  
  if (Server.isUserAuth())
    history.push('/')

  const tryIn = () => {
    if (Server.isValidAuthData(name, password)) {
      Server.logIn(name)
      history.push('/')
      debugger
    }
    else
      setErrorMessage('Wrong auth data')
      debugger
  }

  return (
    <div className='log-in-form'>
      <label htmlFor='user-name-form'>Name</label>
      <input
        name='user-name'
        id='user-name-form'
        onChange={e => setName(e.target.value)}/>
      <label htmlFor='user-password-form'>Password</label>
      <input
        name='user-password'
        id='user-password-form'
        onChange={e => setPassword(e.target.value)}/>
      <span className='alert'>{errorMessage}</span>
      <button onClick={() => tryIn()}>In</button>
    </div>
  )
}