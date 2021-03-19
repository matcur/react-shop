import React from 'react'
import { links } from '../../main-links'

export const Navbar: React.FC = () => {
  return (
    <ul className="navigate-menu">
      {links.map(l => <li className="navigate-menu__link">{l}</li>)}
    </ul>
  )
}