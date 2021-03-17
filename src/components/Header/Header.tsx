import React from "react"
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo/>
      <Menu/>
    </div>
  )
}