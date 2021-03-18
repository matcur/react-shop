import React from "react"
import { AuthLinks } from "./AuthLinks"
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo/>
      <Menu/>
      <AuthLinks/>
    </div>
  )
}