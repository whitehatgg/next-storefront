import { inject, observer } from 'mobx-react'
import { FormattedNumber } from 'react-intl'
import Link from 'next/link'
import CartMenuItem from './CartMenuItem'

export default inject('store', 'router')(observer(({ store, router }) => {
  return (
    <div className="cart-menu"
      onBlur={ () => store.setShowModal(false) }
      tabIndex="0"
    >
      <a 
        onClick={ () => store.setShowModal(!store.showModal) }
      >
        <span>My Cart</span> (<span className={ store.cart.length ? 'light' : '' }>{ store.cartCount }</span>) <span>▼</span>
      </a>
      <div 
        className={ !store.showModal ? 'hidden' : 'cart-dropdown' }
      >
        <table>
          <tbody>
          {
            store.cart.map(( cartProduct ) => {
              return <CartMenuItem
                product={ store.getProductById(cartProduct.id) }
                quantity={ cartProduct.quantity }
                key={ cartProduct.id }
                remove={() => store.removeFromCart(cartProduct.id, 1) }
              />
            })
          }
          </tbody>
          <tfoot>
            <tr>
              <td>Subtotal</td>
              <td>&nbsp;</td>
              <td><FormattedNumber value={ store.cartSubTotal } style="currency" currency={ 'USD' } /></td>
            </tr>
          </tfoot>
        </table>
        <a onClick={ (e) => {
          router.push('/cart')
          store.setShowModal(false)
        } } className="button white push-left">View Cart</a>
        <button className="push-right" >Checkout</button>
      </div>
      <style jsx>{`
        .cart-menu {
          padding: 15px 30px;
          display: inline-block;
          float: right;
          position: relative;
        }

        .cart-menu span.light {
          color: #e74c3c;
        }

        .cart-menu .cart-dropdown {
          position: absolute;
          right: 0;
          background-color: #ffffff;
          padding: 20px;
          width: 400px;
        }

        .cart-menu .cart-dropdown table {
          width: 100%;
        }

        .cart-menu .cart-dropdown table td:last-child {
          text-align: right;
        }
      `}</style>
    </div>
  )
}))