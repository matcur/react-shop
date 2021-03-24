import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Server } from '../../api/server'
import { Field } from '../../components/common/form/Field'
import { Validation } from '../../components/common/form/Validation'

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
        setValue={setName}>
        <Validation
          rules={[nameRule]}/>
      </Field>
      <Field
        labelText='Password'
        value={password}
        setValue={setPassword}>
        <Validation
          prepareRules={[nameRule]}
          rules={[passwordRule]}/>
      </Field>
      <Field
        labelText='Repeat password'
        value={repeatedPassword}
        setValue={setRepeatedPassword}>
        <Validation
          prepareRules={[nameRule, passwordRule]}
          rules={[repeatedPasswordRule]}/>
      </Field>
      <button onClick={register}>Register</button>
    </div>
  )
}