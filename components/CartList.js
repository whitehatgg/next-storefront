import { inject, observer } from 'mobx-react'

export default inject('store')(observer(({ store }) => {
  return (
    <div className="cart">
      <span>Cart</span> <span className={ store.cart.length ? 'light' : '' }>{ store.cart.length }</span>
      <style jsx>{`
        .cart {
          padding: 15px;
          display: inline-block;
          float: right;
        }

        .cart span.light {
          color: #e74c3c;
        }
      `}</style>
    </div>
  )
}))
