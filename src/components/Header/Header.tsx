import React from "react"
import { AuthLinks } from "./AuthLinks"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo/>
      <Navbar/>
      <AuthLinks/>
    </div>
  )
}