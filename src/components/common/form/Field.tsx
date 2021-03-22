import React, { useState } from 'react'

interface IProps {
  value: string
  labelText: string
  setValue: (value: string) => void
  name?: string
  id?: string
  prepareRules?: IRule[]
  rules?: IRule[]
  alertClassName?: string
}

interface IRule {
  check: () => boolean
  errorMessage: string
}

export const Field: React.FC<IProps> = ({value, labelText, setValue, name = '', id = '', prepareRules = [], rules = [], alertClassName = 'alert'}) => {
  const [error, setError] = useState('')

  const hasWrongRules = (rules: IRule[]) => rules.filter(r => !r.check()).length != 0

  rules.find(rule => {
    if (hasWrongRules(prepareRules))
      return true
    
    if (rule.check() && error == rule.errorMessage) {
      setError('')

      return true;
    }
  
    if (!rule.check() && error != rule.errorMessage) {
      setError(rule.errorMessage)

      return true
    }
  })

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        name={name}
        id={id}
        onChange={e => setValue(e.target.value)}/>
      <span className={alertClassName}>{error}</span>
    </div>
  )
}