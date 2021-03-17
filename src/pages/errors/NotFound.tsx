import React from 'react'

interface IProps {
  info?: string
}

export const NotFound: React.FC<IProps> = ({info}) => {
  return (
    <div>
      Not Found {info? info: ''}
    </div>
  )
}