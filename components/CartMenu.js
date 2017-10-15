import { inject, observer } from 'mobx-react'

export default inject('store')(observer(({ store }) => {
  return (
    <div className="cart-menu">
      <span>My Cart</span> (<span className={ store.cart.length ? 'light' : '' }>{ store.cartCount }</span>)
      <style jsx>{`
        .cart-menu {
          padding: 15px;
          display: inline-block;
          float: right;
        }

        .cart-menu span.light {
          color: #e74c3c;
        }
      `}</style>
    </div>
  )
}))