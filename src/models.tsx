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

export interface ICartProductSet {
  product: IProduct
  count: number
}

export interface ICart {
  productSets: ICartProductSet[]
}