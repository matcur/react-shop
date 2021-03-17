import React from 'react'
import { links } from '../../main-links'

export const Menu: React.FC = () => {
  return (
    <ul className="navigate-menu">
      {links.map(l => <li className="navigate-menu__link">{l}</li>)}
    </ul>
  )
}