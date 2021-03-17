import React from "react"
import { IProduct } from "../../models"
import { PaginateNavigation } from "../common/PaginateNavigation"
import { PaginateItem } from "./PaginateItem"

interface IProps {
  info: IInfo
}

export interface IInfo {
  products: IProduct[]
  currentPage: number
  lastPage: number
}

export const Paginate: React.FC<IProps> = ({info}) => {
  return (
    <div className="product-paginate">
      {
        info.products.map(p => <PaginateItem product={p}/>)
      }
      <PaginateNavigation currentPage={info.currentPage} pageCount={info.lastPage}/>
    </div>
  )
}