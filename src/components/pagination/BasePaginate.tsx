import React from 'react'
import { PaginateNavigation } from './PaginateNavigation'

interface IProps {
  info: PaginateInfo
  className?: string
  onPageSelected?: (page: number) => void
}

export type PaginateInfo = {
  currentPage: number
  lastPage: number
}

export const BasePaginate: React.FC<IProps> = ({info, children, className = '', onPageSelected = () => {}}) => {
  return (
    <div className={`paginate ${className}`}>
      {children}
      <PaginateNavigation
        currentPage={info.currentPage}
        pageCount={info.lastPage}
        onPageSelected={onPageSelected}/>
    </div>
  )
}