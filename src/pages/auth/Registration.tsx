import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Server } from '../../api/server'

type WrongFormData = {
  [P in keyof IFormData]?: string
} & {
  passwordEquality?: string
}

interface IFormData {
  name: string
  password: string
  repeatedPassword: string
}

export const Registration : React.FC = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [errors, setErrors] = useState<WrongFormData>({})
  const history = useHistory()

  const formData = {name, password, repeatedPassword}

  const validateData = (data: IFormData) => {
    const finedErrors: WrongFormData = {}
    const {name, password, repeatedPassword} = data

    if (name.length < 7)
      finedErrors.name = 'Name length must be more than 6 symbols.'
    else
      finedErrors.name = ''

    if (password.length < 7 && name.length > 7)
      finedErrors.password = 'Password length must be more than 6 symbols.'
    else
      finedErrors.password = ''

    if (password.length != 0 && repeatedPassword.length < 7 && name.length > 7)
      finedErrors.repeatedPassword = 'Repeated password length must be more than 6 symbols.'
    else
      finedErrors.repeatedPassword = ''

    if (password.length > 6 && password != repeatedPassword)
      finedErrors.passwordEquality = 'Passwords must be same.'
    else
      finedErrors.passwordEquality = ''

    setErrors(finedErrors)
  }

  const register = () => {
    if (Server.isNameFree(formData.name)) {
      Server.registerUser(formData.name, formData.password)
      Server.logIn(formData.name)
      history.push('/')
    }
  }

  return (
    <div className='registration-form'>
      <label htmlFor='user-name-form-data'>Name</label>
      <input
        name='user-name'
        id='user-name-form-data'
        onChange={e => {
          const name = e.target.value
          setName(name)
          validateData({...formData, name})
        }}/>
      <span className="alert">{errors.name}</span>
      <label htmlFor='password-form-data'>Password</label>
      <input
        name='password'
        id='password-form-data'
        onChange={e => {
          const password = e.target.value
          setPassword(e.target.value)
          validateData({...formData, password})
        }}/>
      <span className="alert">{errors.password} </span>
      <span className="alert">{errors.passwordEquality}</span>
      <label htmlFor='user-name-form-data'>Repeat password</label>
      <input
        name='repeated-password'
        id='repeated-password-form-data'
        onChange={e => {
          const repeatedPassword = e.target.value
          setRepeatedPassword(repeatedPassword)
          validateData({...formData, repeatedPassword})
        }}/>
      <span className="alert">{errors.repeatedPassword} </span>
      <span className="alert">{errors.passwordEquality}</span>
      <button onClick={() => register()}>Register</button>
    </div>
  )
}