import React from 'react'
import { Link } from 'react-router-dom'
import { Server } from '../../api/server'

export const AuthLinks : React.FC = () => {
  const isAuth = Server.isUserAuth()

  return (
    <div className='auth-navbar'>
      {
        Server.isUserAuth()
          ? <Link to='/sign-out'>Sign Out</Link>
          : (
            <>
              <Link to='/log-in'>Log in</Link>
              <Link to='/registration'>Registration</Link>
            </>
          )
      }
    </div>
  )
}