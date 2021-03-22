import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Server } from '../../api/server'
import { Field } from '../../components/common/form/Field'

export const Registration : React.FC = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const history = useHistory()

  const nameRule = {
    check: () => name.length > 6, errorMessage: 'Name must be more than 6'
  }
  const passwordRule = {
    check: () => password.length > 6, errorMessage: 'Password must be more than 6',
  }
  const repeatedPasswordRule = {
    check: () => repeatedPassword == password, errorMessage: 'Password must be same',
  }

  const register = () => {
    if (Server.isNameFree(name)) {
      Server.registerUser(name, password)
      Server.logIn(name)
      history.push('/')
    }
  }

  return (
    <div className='registration-form'>
      <Field
        labelText='Name'
        value={name}
        setValue={setName}
        rules={[nameRule]}/>
      <Field
        labelText='Password'
        value={password}
        setValue={setPassword}
        prepareRules={[nameRule]}
        rules={[passwordRule]}/>
      <Field
        labelText='Repeat password'
        value={repeatedPassword}
        setValue={setRepeatedPassword}
        prepareRules={[nameRule, passwordRule]}
        rules={[repeatedPasswordRule]}/>
      <button onClick={register}>Register</button>
    </div>
  )
}