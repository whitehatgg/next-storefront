import { FormattedNumber } from 'react-intl'
import Link from 'next/link'

export default ({ product, quantity, remove }) => {
  return (
  	<tr className="cart-menu-item" >
  		<td>
			<img src={ `/static/${ product.image }` } />
	    </td>
	    <td className="cart-menu-description">
	    	<div>{ product.brand }</div>
	    	<div>{ `${ product.title } x ${ quantity }` }</div>
	    	<span className="price"><FormattedNumber value={ product.price * quantity } style="currency" currency={ 'USD' } /></span>
	    </td>
	    <td>
	    	<a onClick={ remove }>X</a>
		</td>

		<style jsx>{`
			.cart-menu-item {
				width: 100%;
			}

			.cart-menu-item img {
				width: 80px;
				height: 80px;
			}
			
	        .cart-menu-item td:last-child {
	          text-align: right;
	        }

	        .cart-menu-description {
	        	padding: 0 40px 0 10px;
	        }
		`}</style>
    </tr>
  )
}