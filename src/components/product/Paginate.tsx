import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../models'
import { BasePaginate } from '../common/BasePaginate'
import { PaginateInfo } from '../common/BasePaginate'
import { PaginateItem } from '../common/PaginateItem'

interface IProps {
  info: PaginateInfo
  products: IProduct[]
}

export const Paginate: React.FC<IProps> = ({info, products}) => {
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
      <BasePaginate info={info}>
        {
          products.map(p => makePaginateItem(p))
        }
      </BasePaginate>
    </div>
  )
}