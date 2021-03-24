import React, { useState } from "react"
import { useParams } from "react-router"
import { Server } from "../../api/server"
import { ICategory } from "../../models"
import { NotFound } from "../../pages/errors/NotFound"

interface IProps {
}

export const Details: React.FC<IProps> = () => {
  const [category, setCategory] = useState<ICategory>()
  const [isLoaded, setIsLoaded] = useState(false)
  const {id} = useParams<{id: string}>()

  if (!isLoaded) {
    Server.getProductById(parseInt(id))
          .then(res => setCategory(res))
          .catch(rej => {})
          
    setIsLoaded(true);
  }

  return (
    <div className="product-details">
      <h1>{category?.name}</h1>
      <div>{category?.description}</div>
    </div>
  )
}