import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import CartList from './CartList'

export default inject('store')(observer(({ children, title, store }) => {
  return <div>
    <div>
      <h1>Next Storefront</h1>
      <CartList cart={ store.cart } />
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/product"><a>Product</a></Link>
        <Link href="/cart"><a>Cart</a></Link>
      </nav>
    </div>
    <div>
      <h2>{title}</h2>
      { children }
    </div>
  </div>
}))
