import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Server } from "../../api/server"
import { ICategory } from "../../models"
import { NotFound } from "../../pages/errors/NotFound"

interface IProps {
}

export const Details: React.FC<IProps> = () => {
  const [category, setCategory] = useState<ICategory>()
  const {id} = useParams<{id: string}>()

  useEffect(() => {
    Server.getProductById(parseInt(id))
          .then(res => setCategory(res))
          .catch(rej => {})
  })

  return (
    <div className="product-details">
      <h1>{category?.name}</h1>
      <div>{category?.description}</div>
    </div>
  )
}