import React, { useState } from 'react'
import { Server } from '../api/server';
import { PaginateItem } from '../components/category/PaginateItem';
import { Paginate } from '../components/common/Paginate'
import { ICategory } from '../models';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoaded, setIsLoaded] = useState(false)

  const info = {
    currentPage: 0,
    lastPage: 3,
  } 
  if (!isLoaded)
    Server.getProductsByPage(0, 10)
          .then(res => {
            setIsLoaded(true)
            setCategories(res)
          })

  return (
    <div className="body category-page">
      <Paginate {...info}>
        {
          categories.map(c => <PaginateItem category={c}/>)
        }
      </Paginate>
    </div>
  )
}