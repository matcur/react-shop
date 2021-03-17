import React, { useState } from 'react'
import { Server } from '../api/server';
import { IInfo, Paginate } from '../components/category/Paginate'
import { ICategory } from '../models';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoaded, setIsLoaded] = useState(false)

  const info: IInfo = {
    categories,
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
    <Paginate info={info}/>
  )
}