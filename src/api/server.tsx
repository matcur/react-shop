import { IProduct } from "../models";

const products: IProduct[] = [
  {id: 1, name: 'apple', description: 'very well apple', price: 100},
  {id: 2, name: 'dog', description: 'very well dog', price: 1020},
  {id: 3, name: 'velocity', description: 'very well velocity', price: 1100},
  {id: 4, name: 'sun', description: 'very well sun', price: 2100},
  {id: 5, name: 'moon', description: 'very well moon', price: 100},
  {id: 6, name: 'velocity', description: 'very well velocity', price: 5100},
  {id: 7, name: 'sun', description: 'very well sun', price: 2100},
  {id: 8, name: 'moon', description: 'very well moon', price: 4100},
  {id: 9, name: 'apple', description: 'very well apple', price: 5100},
  {id: 10, name: 'dog', description: 'very well dog', price: 1100},
  {id: 11, name: 'velocity', description: 'very well velocity', price: 2100},
  {id: 12, name: 'sun', description: 'very well sun', price: 6100},
  {id: 13, name: 'moon', description: 'very well moon', price: 100},
  {id: 14, name: 'velocity', description: 'very well velocity', price: 7100},
  {id: 15, name: 'sun', description: 'very well sun', price: 300},
  {id: 16, name: 'moon', description: 'very well moon', price: 2100},
  {id: 17, name: 'moon', description: 'very well moon', price: 1400},
  {id: 18, name: 'velocity', description: 'very well velocity', price: 1050},
  {id: 19, name: 'sun', description: 'very well sun', price: 12200},
  {id: 20, name: 'moon', description: 'very well moon', price: 10210},
  {id: 21, name: 'apple', description: 'very well apple', price: 1100},
  {id: 22, name: 'dog', description: 'very well dog', price: 1500},
  {id: 23, name: 'velocity', description: 'very well velocity', price: 15100},
  {id: 24, name: 'sun', description: 'very well sun', price: 1010},
  {id: 25, name: 'moon', description: 'very well moon', price: 1020},
]

export class Server {
  static async getProductsByPage(page: number, perPage: number) {
    await setTimeout(() => {}, 100)

    return new Promise<IProduct[]>(resolve => {
      resolve(products.slice(perPage * page, perPage))
    })
  }

  static async getProductById(id: number) {
    await setTimeout(() => {}, 100)

    return new Promise<IProduct>((resolve, reject) => {
      const product = products.find(p => p.id === id)
      
      if (product === undefined)
        reject()
      else
        resolve(product)
    })
  }
}