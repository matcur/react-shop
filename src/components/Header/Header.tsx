import React from "react"
import { AuthLinks } from "./AuthLinks"
import { CategoryMenu } from "./CategoryMenu"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo/>
      <CategoryMenu/>
      <Navbar/>
      <AuthLinks/>
    </div>
  )
}