import React from 'react'
import { PaginateNavigation } from './PaginateNavigation'

interface IProps {
  info: PaginateInfo
  className?: string
}

export type PaginateInfo = {
  currentPage: number
  lastPage: number
}

export const BasePaginate: React.FC<IProps> = ({info, children, className = ''}) => {
  return (
    <div className={`paginate ${className}`}>
      {children}
      <PaginateNavigation currentPage={info.currentPage} pageCount={info.lastPage}/>
    </div>
  )
}