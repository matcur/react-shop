import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../models'
import { BasePaginate } from '../pagination/BasePaginate'
import { PaginateInfo } from '../pagination/BasePaginate'
import { PaginateItem } from '../pagination/PaginateItem'

interface IProps {
  info: PaginateInfo
  products: IProduct[]
  onPageSelected?: (page: number) => void
}

export const Paginate: React.FC<IProps> = ({info, products, onPageSelected = () => {}}) => {
  const makePaginateItem = (product: IProduct) => {
    return (
      <PaginateItem>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
        <div>{product.price}</div>
      </PaginateItem>
    )
  }

  return (
    <div className="body product-page">
      <BasePaginate 
        info={info}
        onPageSelected={onPageSelected}>
        {
          products.map(p => makePaginateItem(p))
        }
      </BasePaginate>
    </div>
  )
}