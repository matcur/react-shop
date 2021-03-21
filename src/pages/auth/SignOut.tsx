import React from 'react'
import { useSignOut } from '../../hooks/auth/useSignOut'

interface IProps {

}

export const SignOut: React.FC<IProps> = ({}) => {
  useSignOut()()
  
  return (
    <div></div>
  )
}