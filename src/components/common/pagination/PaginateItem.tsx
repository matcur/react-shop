import React from "react"

interface IProps {
  className?: string 
}

export const PaginateItem: React.FC<IProps> = ({children, className = ''}) => {
  return (
    <div className={`paginate-item ${className}`}>
      {children}
    </div>
  )
}