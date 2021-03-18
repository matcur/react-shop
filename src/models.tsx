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