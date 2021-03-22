import React, { useState } from 'react'
import { Server } from '../api/server';
import { PaginateItem } from '../components/common/pagination/PaginateItem';
import { ICategory } from '../models';
import { Paginate } from '../components/category/Paginate';
import { usePageSelected } from '../hooks/usePageSelected';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [lastPage, setLastPage] = useState(5)
  const onPageSelected = usePageSelected(setCurrentPage, setIsLoaded)

  if (!isLoaded)
    Server.getCategoriesByPage(currentPage, 10)
          .then(res => {
            setIsLoaded(true)
            setCategories(res)
          })

  return <Paginate 
            info={{currentPage, lastPage}} 
            categories={categories}
            onPageSelected={onPageSelected}/>
}