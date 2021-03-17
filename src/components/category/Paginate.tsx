import React from "react"
import { ICategory } from "../../models"
import { PaginateNavigation } from "../common/PaginateNavigation"
import { PaginateItem } from "./PaginateItem"

interface IProps {
  info: IInfo
}

export interface IInfo {
  categories: ICategory[]
  currentPage: number
  lastPage: number
}

export const Paginate: React.FC<IProps> = ({info}) => {
  return (
    <div className="product-paginate">
      {
        info.categories.map(c => <PaginateItem category={c}/>)
      }
      <PaginateNavigation currentPage={info.currentPage} pageCount={info.lastPage}/>
    </div>
  )
}