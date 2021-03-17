import React from "react"
import { Link } from "react-router-dom"
import { ICategory } from "../../models"

interface IProps {
  category: ICategory
}

export const PaginateItem: React.FC<IProps> = ({category}) => {
  return (
    <div className="category">
      <div><Link to={`/categories/${category.id}`}>{category.name}</Link></div>
      <div><Link to={`/categories/${category.id}/posts`}>Posts</Link></div>
    </div>
  )
}