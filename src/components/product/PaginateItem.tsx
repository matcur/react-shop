import React from "react"
import { Link } from "react-router-dom"
import { IProduct } from "../../models"

interface IProps {
  product: IProduct
}

export const PaginateItem: React.FC<IProps> = ({product}) => {
  return (
    <div className="products">
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      <div>{product.price}</div>
    </div>
  )
}