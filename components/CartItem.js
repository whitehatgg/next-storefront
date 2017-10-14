import { FormattedNumber } from 'react-intl'
import Link from 'next/link'

export default ({ product, id, quantity, remove }) => {
  return (
  	<tr className="cart-item" >
  		<td>
			<Link href={{ pathname: '/product', query: { id: id } }}><img src={ `/static/${ product.image }` } /></Link>
	  	</td>
  		<td>
		    <div>{ product.brand }</div>
		    <div>{ product.title }</div>
	    </td>
  		<td>
		    <input readOnly="true" type="number" value={ quantity } />
	    </td>
  		<td>
		    <span className="price"><FormattedNumber value={ product.price } style="currency" currency={ 'USD' } /></span>
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