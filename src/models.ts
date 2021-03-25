export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  categoryId?: number
} 

export interface ICategory {
  id: number
  name: string
  description: string
}

export interface IUser {
  id: number
  name: string
  password: string
}

export interface IProductSet {
  product: IProduct
  count: number
}

export interface ICart {
  productSets: IProductSet[]
}

export interface IOrder {
  id: number
  customer: IUser
  productSets: IProductSet[]
  isPayed: boolean
  createdAt: string
}