import React from 'react'
import { Link } from 'react-router-dom'
import { ICategory } from '../../models'
import { BasePaginate } from '../pagination/BasePaginate'
import { PaginateInfo } from '../pagination/BasePaginate'
import { PaginateItem } from '../pagination/PaginateItem'

interface IProps {
  info: PaginateInfo
  categories: ICategory[]
}

export const Paginate: React.FC<IProps> = ({info, categories}) => {
  const makePaginateItem = (category: ICategory) => {
    return (
      <PaginateItem>
        <div><Link to={`/categories/${category.id}`}>{category.name}</Link></div>
        <div><Link to={`/categories/${category.id}/posts`}>Posts</Link></div>
      </PaginateItem>
    )
  }

  return (
    <div className="body category-page">
      <BasePaginate info={info}>
        {
          categories.map(c => makePaginateItem(c))
        }
      </BasePaginate>
    </div>
  )
}