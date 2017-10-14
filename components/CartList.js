import { inject, observer } from 'mobx-react'

export default inject('store')(observer(({ store }) => {
  //calculate quant
  const cartQuantity = store.cart.reduce((accumulator, product) => {
    return accumulator + product.quantity
  }, 0)
  //return component
  return (
    <div className="cart">
      <span>Cart</span> <span className={ store.cart.length ? 'light' : '' }>{ cartQuantity }</span>
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
