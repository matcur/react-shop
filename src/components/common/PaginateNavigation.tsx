import React from 'react'

interface IProps {
  pageCount: number,
  currentPage: number,
  paginationClassName?: string,
  pageItemClassName?: string,
}

export const PaginateNavigation: React.FC<IProps> = ({pageCount, currentPage, paginationClassName, pageItemClassName}) => {
  const isCurrentPage = (page: number) => page === currentPage

  const makePageItem = (page: number) => {
    const className = `
        paginate-navigation-page-item ${pageItemClassName}
        ${isCurrentPage(page)? 'paginate-navigation-current-page': ''}
      `
    return (
      <div className={className}>
        {page}
      </div>
    )
  }

  return (
    <div className={`paginate-navigation ${paginationClassName}`}>
      {Array(pageCount).map(i => makePageItem(i))}
    </div>
  )
}