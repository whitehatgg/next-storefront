import { FormattedNumber } from 'react-intl'
import Link from 'next/link'

export default ({ product, quantity, remove, setQuantity }) => {
  return (
  	<tr className="cart-item" >
  		<td>
			<Link href={{ pathname: '/product', query: { id: product.id } }}><a><img src={ `/static/${ product.image }` } /></a></Link>
	  	</td>
  		<td>
		    <div>{ product.brand }</div>
		    <div>{ product.title }</div>
	    </td>
  		<td>
		    <input type="number" min="1" value={ quantity } onChange={ setQuantity } />
	    </td>
  		<td>
		    <span className="price"><FormattedNumber value={ product.price * quantity } style="currency" currency={ 'USD' } /></span>
	    </td>
  		<td>
		    <a onClick={ remove }>X</a>
	    </td>

		<style jsx>{`
			.cart-item  {
				text-align: left;
			}
			
	        .cart-item td:last-child {
	          text-align: right;
	        }

			.cart-item img {
				width: 10em;
    			height: 6em;
			}
		`}</style>
    </tr>
  )
}