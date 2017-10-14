import { FormattedNumber } from 'react-intl'
import Link from 'next/link'

export default ({ product, id, add }) => {
  return (
  	<div className="product" >
	    <div className="overlay-container">
	    	<img src={ `/static/${ product.image }` } />
	    	<div className="overlay">
			    <button onClick={ add }>Add to Cart</button>
			    <Link href={{ pathname: '/product', query: { id: id } }}><button>View Details</button></Link>
	    	</div>
	    </div>
	    <span>{ product.brand }</span>
	    <h4>{ product.title }</h4>
	    <span className="price"><FormattedNumber value={ product.price } style="currency" currency={ 'USD' } /></span>

		<style jsx>{`
			.product {
				display: inline-block;
				margin: 0.75em;
				width: 100%;
				max-width: 18em;
				position: relative;
			}

			.product .overlay-container {
				position: relative;
				margin-bottom: 0.5em;
			}

			.product .overlay-container .overlay {
				display: none;
			}

			.product h4 {
				font-size: 0.8em;
				text-transform: uppercase;
			}

			.product .price {
				display: block;
				padding-bottom: 10px;
			}

			.product .overlay-container img {
				width: 18em;
				height: 18em;
				position: relative;
				overflow: hidden;
				cursor: pointer;
				transition: box-shadow 0.25s;
			}

			@media(max-width: 600px) {
				.product .overlay-container img {
					width: 100vw;
					height: 100vw;
				}
			}

			.product:hover .overlay-container .overlay {
				display: block;
				position: absolute;
				background-color:rgba(0, 0, 0, 0.5);
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 5em;
				color: white;
				text-shadow: 0 0 5px rgba(0,0,0,0.5), 0 0 10px rgba(0,0,0,0.5); 
				transition: all 0.25s;
			}

			.product:hover {
				box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
			}

			.product:hover:before {
				opacity: 1;
			}

			.product:hover:after {
				top: 50%;
			}
		`}</style>
    </div>
  )
}
