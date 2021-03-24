import React, { useState } from 'react'

interface IProps {
  prepareRules?: IRule[]
  rules: IRule[]
  alertClassName?: string
}

interface IRule {
  check: () => boolean
  errorMessage: string
}

export const Validation: React.FC<IProps> = ({rules, prepareRules = [], alertClassName = 'alert'}) => {
  const hasViolatedRules = (rules: IRule[]) =>  {
    return rules.find(r => !r.check()) != undefined
  }

  if (hasViolatedRules(prepareRules))
    return <span></span>

  const violatedRule = rules.find(rule => !rule.check())
  
  return (
    <span className={alertClassName}>{violatedRule?.errorMessage}</span>
  )
}