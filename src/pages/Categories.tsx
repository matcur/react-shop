import React, { useState } from 'react'
import { Server } from '../api/server';
import { PaginateItem } from '../components/common/PaginateItem';
import { ICategory } from '../models';
import { Link } from 'react-router-dom';
import { Paginate } from '../components/category/Paginate';

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

  return <Paginate info={info} categories={categories}/>
}