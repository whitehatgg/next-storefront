import { FormattedNumber } from 'react-intl'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import CartList from './CartList'

export default inject('store')(observer(({ store }) => {
  //render message if cart is empty
  if (!store.cart.length) {
    return (
      <p>Cart is empty <Link href="/"><a>Continue Shopping</a></Link></p>
    )
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <CartList />

      <style jsx>{`
        .cart-page {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  )
}))