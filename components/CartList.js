import { inject, observer } from 'mobx-react'
import CartItem from './CartItem'

export default inject('store')(observer(({ store }) => {
  return (
    <div className="cart-list">
      <table className="cart-table">
        <thead>
          <tr>
          <td>Product</td>
          <td></td>
          <td>Quantity</td>
          <td>Total</td>
          <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {
          store.cart.map(( product, index ) => {
            return <CartItem product={ store.products[product.id] } quantity={ product.quantity } id={ product.id } key={ index } remove={() => store.removeFromCart(index, 1) } />
          })
        }
        </tbody>
      </table>

      <style jsx>{`
        .cart-list  {
          background-color: #ffffff;
          margin: auto;
          width: 70%;
          padding: 30px;
        }

        .cart-list .cart-table  {
          width: 100%;
          margin: auto;
        }

        .cart-list .cart-table thead {
          text-align: left;
        }
      `}</style>
    </div>
  )
}))
