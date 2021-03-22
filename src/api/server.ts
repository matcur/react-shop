import { ICart, ICategory, IProduct, IUser } from "../models";

const products: IProduct[] = [
  {id: 1, name: 'apple', description: 'very well apple', price: 100, categoryId: 1},
  {id: 2, name: 'dog', description: 'very well dog', price: 1020, categoryId: 2},
  {id: 3, name: 'velocity', description: 'very well velocity', price: 1100, categoryId: 3},
  {id: 4, name: 'sun', description: 'very well sun', price: 2100, categoryId: 1},
  {id: 5, name: 'moon', description: 'very well moon', price: 100, categoryId: 1},
  {id: 6, name: 'velocity', description: 'very well velocity', price: 5100, categoryId: 1},
  {id: 7, name: 'sun', description: 'very well sun', price: 2100, categoryId: 1},
  {id: 8, name: 'moon', description: 'very well moon', price: 4100, categoryId: 2},
  {id: 9, name: 'apple', description: 'very well apple', price: 5100, categoryId: 2},
  {id: 10, name: 'dog', description: 'very well dog', price: 1100, categoryId: 2},
  {id: 11, name: 'velocity', description: 'very well velocity', price: 2100, categoryId: 1},
  {id: 12, name: 'sun', description: 'very well sun', price: 6100, categoryId: 3},
  {id: 13, name: 'moon', description: 'very well moon', price: 100, categoryId: 1},
  {id: 14, name: 'velocity', description: 'very well velocity', price: 7100, categoryId: 1},
  {id: 15, name: 'sun', description: 'very well sun', price: 300, categoryId: 3},
  {id: 16, name: 'moon', description: 'very well moon', price: 2100, categoryId: 1},
  {id: 17, name: 'moon', description: 'very well moon', price: 1400, categoryId: 2},
  {id: 18, name: 'velocity', description: 'very well velocity', price: 1050, categoryId: 1},
  {id: 19, name: 'sun', description: 'very well sun', price: 12200, categoryId: 1},
  {id: 20, name: 'moon', description: 'very well moon', price: 10210, categoryId: 2},
  {id: 21, name: 'apple', description: 'very well apple', price: 1100, categoryId: 2},
  {id: 22, name: 'dog', description: 'very well dog', price: 1500, categoryId: 3},
  {id: 23, name: 'velocity', description: 'very well velocity', price: 15100, categoryId: 2},
  {id: 24, name: 'sun', description: 'very well sun', price: 1010, categoryId: 1},
  {id: 25, name: 'moon', description: 'very well moon', price: 1020, categoryId: 1},
]

const categories: ICategory[] = [
  {id: 1, name: 'Cats', description: 'Cats description'},
  {id: 2, name: 'Fruits', description: 'Fruits description'},
  {id: 3, name: 'Sun', description: 'Sun description'},
]

const users: IUser[] = [
  {id: 1, name: 'Steve', password: '1234'},
  {id: 2, name: 'Jon', password: '1234'},
  {id: 3, name: 'Rustam', password: '1234'},
  {id: 4, name: 'Vadim', password: '1234'},
]

let currentUser: IUser | undefined = undefined
const currentCart: ICart = {
  productSets: [
    {
      product: products[0],
      count: 5,
    },
  ]
}

export class Server {
  static async getProductsByPage(page: number, perPage: number) {
    await setTimeout(() => {}, 100)

    return new Promise<IProduct[]>(resolve => {
      const offset = Math.max(perPage - 2, 0) * page
      
      resolve(products.slice(offset, offset + perPage))
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

  static async getPostsByCategoryId(id: number) {
    await setTimeout(() => {}, 100)

    return new Promise<IProduct[]>((resolve, reject) => {
      resolve(products.filter(p => p.categoryId === id))
    })
  }

  static async getCategoriesByPage(page: number, perPage: number) {
    await setTimeout(() => {}, 100)

    return new Promise<ICategory[]>(resolve => {
      resolve(categories.slice(perPage * Math.max(page - 1, 0), perPage))
    })
  }

  static async getCategoryById(id: number) {
    await setTimeout(() => {}, 100)

    return new Promise<ICategory>((resolve, reject) => {
      const category = categories.find(p => p.id === id)
      
      if (category === undefined)
        reject()
      else
        resolve(category)
    })
  }

  static isValidAuthData(name: string, password: string) {
    return users.find(u => u.name == name && u.password == password) != undefined
  }

  static isNameFree(name: string) {
    return users.find(u => u.name == name) == undefined
  }

  static isUserAuth() {
    return currentUser != null
  }

  static logIn(name: string) {
    currentUser = users.find(u => u.name == name)
  }

  static registerUser(name: string, password: string) {
    users.push({id: users.length + 1,name, password})
  }

  static getCartProducts() {
    return currentCart.productSets
  }

  static getCurrentUserCart() {
    return currentCart
  }
  
  static getUserByName(name: string) {
    return users.find(u => u.name == name)
  }

  static searchProducts(filter: (product: IProduct) => boolean) {
    return products.filter(filter)
  }
}