import { map } from 'nanostores'
import type { ItemCart, ItemToRemove, ItemToRemoveToCart } from '../types/cart'
import { useStore } from '@nanostores/react'

const cartItems = map<Record<string, ItemCart>>({})

function checkItemInCart(id: string) {
  return useStore(cartItems).hasOwnProperty(id)
}

function addItemToCart({ id, name, price, quantity }: ItemCart) {
  cartItems.set({
    ...cartItems.get(),
    [id]: { id, name, price, quantity }
  })
}

function removeItemToCart({ id, quantity }: ItemToRemoveToCart) {
  const availableItem = cartItems.get()[id]

  if (!availableItem) return

  console.log(availableItem.quantity)

  if (availableItem.quantity <= 1) {
    const { [id]: _, ...newCartItems } = cartItems.get()
    cartItems.set(newCartItems)

    return
  }

  cartItems.set({
    ...cartItems.get(),
    [id]: { ...availableItem, quantity }
  })
}

function removeItem({ id }: ItemToRemove) {
  const availableItem = cartItems.get()[id]

  if (!availableItem) return

  const { [id]: _, ...newCartItems } = cartItems.get()
  cartItems.set(newCartItems)
}

export { cartItems, addItemToCart, removeItemToCart, removeItem, checkItemInCart }
