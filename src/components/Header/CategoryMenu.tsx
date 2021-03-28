import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Server } from '../../api/server'
import { ICategory } from '../../models'

interface IProps {
}

export const CategoryMenu: React.FC<IProps> = ({}) => {
  const categories = Server.getCategories()
  const makeItem = (category: ICategory) => {
    return (
      <Link
        to={`/categories/${category.id}`}
        className="category-item category-item-link">
        {category.name}
      </Link>
    )
  }

  return (
    <div className="category-menu">
      <div className="burger">
        <div className="burger-lines">
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
      <div className="category-items">
        <div className="category-title category-item">Categories</div>
        {categories.map(makeItem)}
      </div>
    </div>
  )
}