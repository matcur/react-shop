import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../redux/store'

export const AuthLinks : React.FC = () => {
  const isUserAuth = useSelector<RootReducer>(
    state => state.auth.user != undefined
  )

  return (
    <div className='auth-navbar'>
      {
        isUserAuth
        ? <Link to='/sign-out' className='auth-navbar__item'>Sign Out</Link>
        : (
          <>
            <Link to='/log-in' className='auth-navbar__item'>Log in</Link>
            <Link to='/registration' className='auth-navbar__item'>Registration</Link>
          </>
        )
      }
    </div>
  )
}