import { FormattedNumber } from 'react-intl'
import Link from 'next/link'

export default ({ product, quantity, remove, setQuantity }) => {
  return (
  	<tr className="cart-item" >
  		<td>
			<Link href={{ pathname: '/product', query: { id: product.id } }}><img src={ `/static/${ product.image }` } /></Link>
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
		    <button onClick={ remove }>X</button>
	    </td>

		<style jsx>{`
			.cart-item  {
				text-align: left;
			}

			.cart-item img {
				width: 10em;
    			height: 6em;
			}
		`}</style>
    </tr>
  )
}