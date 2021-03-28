import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Server } from '../../api/server'
import { ICategory } from '../../models'
import { BasePaginate } from '../common/pagination/BasePaginate'
import { PaginateInfo } from '../common/pagination/BasePaginate'
import { PaginateItem } from '../common/pagination/PaginateItem'

interface IProps {
}

export const Paginate: React.FC<IProps> = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(0);

  const onPageSelected = (page: number) => setCurrentPage(page)

  useEffect(() => {
    Server.getCategoryPaginate(currentPage, 3)
          .then(res => {
            setCategories(res.items)
            setLastPage(res.lastPage)
          })
  }, [currentPage])

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
      <BasePaginate
        info={{currentPage, lastPage}}
        onPageSelected={onPageSelected}>
        {
          categories.map(c => makePaginateItem(c))
        }
      </BasePaginate>
    </div>
  )
}