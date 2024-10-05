import clsx from 'clsx'
import { useEffect, useState, type MouseEventHandler } from 'react'
import type { Product } from '../../types/product'
import { addItemToCart, cartItems, checkItemInCart, removeItemToCart } from '../../store/cart'
import { setCurrency } from '../../tools'

function ProductCard({ product }: { product: Product }) {
  const { id, name, price, category, image } = product

  const handleClickNeautral: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    addItemToCart({ id, name, price, quantity: 1 })
  }

  const handleClickIncrement: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    // const newCount = prevState.count >= 10 ? prevState.count : prevState.count + 1
    // addItemToCart({ id, name, price, quantity: newCount })
  }

  const handleClickDecrement: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()

    // const newCount = prevState.count <= 0 ? prevState.count : prevState.count - 1
    // removeItemToCart({ id, quantity: newCount })
  }

  useEffect(() => {
    const unSubscribe = cartItems.subscribe((items) => {
      const item = items[id]

      console.log(items)
    })

    return () => unSubscribe()
  }, [])

  return (
    <article className=''>
      <header className='relative mb-10'>
        <picture className={clsx('relative flex w-full h-full max-h-60 rounded-lg overflow-hidden transition-shadow ease-linear duration-200', false ? 'shadow-red' : 'shadow-none')}>
          <img className='size-full object-cover max-h-full aspect-square' src={image.desktop} alt='' />
        </picture>

        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[22px] w-full max-w-40'>
          <div
            className={clsx(
              'relative w-full max-w-full overflow-hidden rounded-full h-11 transition-colors ease-in duration-300',
              false ? ' text-white bg-red' : 'text-red bg-white shadow-inner-rose'
            )}
          >
            <div
              className={clsx(
                'absolute inset-0 transition-opacity ease-in-out',
                !false ? 'delay-300 duration-500 opacity-100 pointer-events-auto visible' : 'duration-300 opacity-0 pointer-events-none invisible *:pointer-events-none'
              )}
            >
              <button className='flex items-center justify-center gap-x-2 w-full max-w-full rounded-full py-3 px-3' onClick={handleClickNeautral} data-increment>
                <div className='size-5'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20' className='size-full'>
                    <g fill='currentColor' clipPath='url(#a)'>
                      <path d='M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z' />
                      <path d='M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z' />
                    </g>
                    <defs>
                      <clipPath id='a'>
                        <path fill='#fff' d='M.333 0h20v20h-20z' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <span className={clsx(' whitespace-nowrap text-sm font-semibold', false ? 'text-white' : 'text-rose-900')}>Add to Cart</span>
              </button>
            </div>

            <div
              className={clsx(
                'absolute inset-0 transition-opacity ease-in-out',
                false ? 'delay-300 duration-500 opacity-100 pointer-events-auto visible' : 'duration-300 opacity-0 pointer-events-none invisible *:pointer-events-none'
              )}
            >
              <div className='flex items-center justify-between gap-x-2 w-full max-w-full rounded-full py-3 px-3'>
                <button className='rounded-full shadow-inner-white size-5' onClick={handleClickDecrement} data-decrement>
                  <span className='flex items-center justify-center size-full'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none' viewBox='0 0 10 2'>
                      <path fill='currentColor' d='M0 .375h10v1.25H0V.375Z' />
                    </svg>
                  </span>
                </button>

                <span className='text-sm font-bold'>{0}</span>

                <button
                  className={clsx('rounded-full shadow-inner-white size-5', 10 === 10 ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto')}
                  onClick={handleClickIncrement}
                  data-increment
                >
                  <span className='flex items-center justify-center size-full'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='none' viewBox='0 0 10 10'>
                      <path fill='currentColor' d='M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z' />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <footer className=''>
        <div className='categories text-sm font-normal text-rose-500'>
          <span className='category'>{category}</span>
        </div>

        <div className='text-base font-semibold'>
          <h2 className='text-rose-900'>{name}</h2>
          <span className='text-red'>{setCurrency({ quantity: price })}</span>
        </div>
      </footer>
    </article>
  )
}

export default ProductCard
