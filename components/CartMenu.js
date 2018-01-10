import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedNumber } from 'react-intl'
import { withRouter } from 'next/router'
import { setShowModal, removeFromCart } from '../store/actions'
import Link from 'next/link'
import CartMenuItem from './CartMenuItem'

class ProductList extends Component {

  getProductById (productId) {
    const newProductId = parseInt(productId, 10)
    return this.props.products.find(product => product.id === newProductId)
  }

  render () {
    const { showModal, cartCount, cartSubTotal, cart, router } = this.props
    return (
      <div className="cart-menu"
        onBlur={ () => this.props.dispatch(setShowModal(false)) }
        tabIndex="0"
      >
        <a 
          onClick={ () => this.props.dispatch(setShowModal(!showModal)) }
        >
          <span>My Cart</span> (<span className={ cart.length ? 'light' : '' }>{ cartCount }</span>) <span>▼</span>
        </a>
        <div 
          className={ !showModal ? 'hidden' : 'cart-dropdown' }
        >
          <table>
            <tbody>
            {
              cart.map(( cartProduct ) => {
                return <CartMenuItem
                  product={ this.getProductById(cartProduct.id) }
                  quantity={ cartProduct.quantity }
                  key={ cartProduct.id }
                  remove={() => this.props.dispatch(removeFromCart(cartProduct.id, 1)) }
                />
              })
            }
            </tbody>
            <tfoot>
              <tr>
                <td>Subtotal</td>
                <td>&nbsp;</td>
                <td><FormattedNumber value={ cartSubTotal } style="currency" currency={ 'USD' } /></td>
              </tr>
            </tfoot>
          </table>
          <a onClick={ (e) => {
            router.push('/cart')
            this.props.dispatch(setShowModal(false))
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
  }
}

const mapStateToProps = ({ showModal, cartCount, cartSubTotal, cart, products }) => ({ showModal, cartCount, cartSubTotal, cart, products })
export default withRouter(connect(mapStateToProps)(ProductList))