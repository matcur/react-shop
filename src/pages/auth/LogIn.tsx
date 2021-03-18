import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Server } from '../../api/server'
import { Field } from '../../components/form/Field'

export const LogIn: React.FC = () => {
  const history = useHistory()
  if (Server.isUserAuth())
    history.push('/')

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const tryIn = () => {
    if (Server.isValidAuthData(name, password)) {
      Server.logIn(name)
      history.push('/')
    }
    else {
      setErrorMessage('Wrong auth data')
    }
  }

  return (
    <div className='log-in-form'>
      <Field
        value={name}
        setValue={setName}
        labelText='Name'/>
      <Field
        value={password}
        setValue={setPassword}
        labelText='Password'/>
      <span className="alert">{errorMessage}</span>
      <button onClick={() => tryIn()}>In</button>
    </div>
  )
}