import React, { useState } from 'react'
import { Server } from '../../api/server'
import { Field } from '../../components/common/form/Field'
import { useLogIn } from '../../hooks/auth/useLogIn'
import { useRequireGuest } from '../../hooks/auth/useRequireGuest'
import { IUser } from '../../models'

export const LogIn: React.FC = () => {
  useRequireGuest()()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const logIn = useLogIn()

  const tryLogIn = () => {
    if (Server.isValidAuthData(name, password)) {
      logIn(
        Server.getUserByName(name) as IUser,
        {
          tokenExpireDate: 'not today',
          token: '1234567',
        }
      )
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
      <button onClick={() => tryLogIn()}>In</button>
    </div>
  )
}