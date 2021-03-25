import React from 'react'
import { range } from '../../../utils/array'

interface IProps {
  pageCount: number
  currentPage: number
  paginationClassName?: string
  pageItemClassName?: string
  onPageSelected?: (page: number) => void
}

export const PaginateNavigation: React.FC<IProps> = ({
    pageCount, currentPage,
    paginationClassName = '', pageItemClassName = '',
    onPageSelected = () => {}
  }) => {
  const isCurrentPage = (page: number) => page === currentPage
  const makePageItem = (page: number) => {
    const className = `
        paginate-navigation-page-item ${pageItemClassName}
        ${isCurrentPage(page)? 'paginate-navigation-current-page': ''}
      `
    return (
      <div className={className}
           onClick={() => onPageSelected(page)}>
        {page}
      </div>
    )
  }

  return (
    <div className={`paginate-navigation ${paginationClassName}`}>
      {range(pageCount, 1).map(i => makePageItem(i))}
    </div>
  )
}