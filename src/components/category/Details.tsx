import React, { useState } from "react"
import { useParams } from "react-router"
import { Server } from "../../api/server"
import { ICategory } from "../../models"
import { NotFound } from "../../pages/errors/NotFound"

interface IProps {
}

export const Details: React.FC<IProps> = () => {
  const [category, setProduct] = useState<ICategory>()
  const [isLoaded, setIsLoaded] = useState(false)
  const {id} = useParams<{id?: string | undefined}>()

  if (id === undefined)
    return <NotFound/>

  if (!isLoaded) {
    Server.getProductById(parseInt(id))
          .then(res => setProduct(res))
          .catch(rej => {})
          
    setIsLoaded(true);

    return <NotFound/>
  }

  return (
    <div className="products">
      <h1>{category?.name}</h1>
      <div>{category?.description}</div>
    </div>
  )
}