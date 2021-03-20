import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Server } from '../../api/server'
import { Field } from '../../components/form/Field'
import { useLogIn } from '../../hooks/useLogIn'
import { IUser } from '../../models'
import { selectIsUserAuth } from '../../redux/slices/authSlice'
import { RootReducer } from '../../redux/store'

export const LogIn: React.FC = () => {
  const history = useHistory()
  const isUserAuth = useSelector<RootReducer>(selectIsUserAuth)
  if (isUserAuth)
    history.push('/')

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