export type ItemCart = {
  id: string
  name: string
  price: number
  quantity: number
}

export type ItemToRemoveToCart = Pick<ItemCart, 'id' | 'quantity'>

export type ItemToRemove = Pick<ItemCart, 'id'>
