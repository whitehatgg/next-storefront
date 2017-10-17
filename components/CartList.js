import { inject, observer } from 'mobx-react'
import { FormattedNumber } from 'react-intl'
import Link from 'next/link'
import CartItem from './CartItem'

export default inject('store')(observer(({ store }) => {
  return (
    <div className="cart-list">
      <table className="cart-table stripe">
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          store.cart.map(( cartProduct ) => {
            return <CartItem
              product={ store.getProductById(cartProduct.id) }
              quantity={ cartProduct.quantity }
              key={ cartProduct.id }
              remove={() => store.removeFromCart(cartProduct.id, 1) }
              setQuantity={ (value) => store.setCartQuantity(cartProduct.id, value) }
            />
          })
        }
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>
              <div>Cart Overview</div>
              <div>Subtotal</div>
              <div>Tax</div>
              <div>Total</div>
            </td>
            <td></td>
            <td>
              <div>&nbsp;</div>
              <div><FormattedNumber value={ store.cartSubTotal } style="currency" currency={ 'USD' } /></div>
              <div><FormattedNumber value={ store.cartTax } style="currency" currency={ 'USD' } /></div>
              <div><FormattedNumber value={ store.cartTotal } style="currency" currency={ 'USD' } /></div>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="actions">
        <Link href={ "/" }><a className="push-left" >Continue Shopping</a></Link>
        <button className="push-right" >{ 'Checkout (' }<FormattedNumber value={ store.cartTotal } style="currency" currency={ 'USD' } />{ ')' }</button>
      </div>
      <style jsx>{`

        .cart-list  {
          background-color: #ffffff;
          margin: auto;
          width: 70%;
          padding: 30px 70px;
          margin-bottom: 50px;
        }

        .cart-list .cart-table {
          margin: 0 auto;
          padding: 0.5em;
          width: 100%;
          text-align: left;
        }

        th:last-child {
          text-align: right;
        }

        .cart-list td:last-child {
          text-align: right;
        }

        .cart-list .actions {
          display: block;
          width: 100%;
          padding: 70px 0;
        }
      `}</style>
    </div>
  )
}))
