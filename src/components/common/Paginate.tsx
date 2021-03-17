import React from 'react'
import { PaginateNavigation } from './PaginateNavigation'

interface IProps {
  className?: string
  currentPage: number
  lastPage: number
}

export const Paginate: React.FC<IProps> = ({currentPage, lastPage, children, className = ''}) => {
  return (
    <div className={`paginate ${className}`}>
      {children}
      <PaginateNavigation currentPage={currentPage} pageCount={lastPage}/>
    </div>
  )
}