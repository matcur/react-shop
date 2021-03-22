import React from 'react'
import { Server } from '../api/server'
import { useQuery } from '../hooks/useQuery'
import { IProduct } from '../models'

interface IProps {
}

export const SearchResult: React.FC<IProps> = () => {
  const searchValue = useQuery().get('seach-value')
  const products = Server.searchProducts(
    p => p.name == searchValue || p.description == searchValue
  )

  const makeResultItem = (product: IProduct) => {
    return (
      <div className="search-result-item">
        <div>{product.name}</div>
        <div>{product.description}</div>
      </div>
    )
  }

  return (
    <div className="search-result">
      {products.map(makeResultItem)}
    </div>
  )
}