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