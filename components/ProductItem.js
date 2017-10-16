import { FormattedNumber } from 'react-intl'
import Link from 'next/link'

export default ({ product, add }) => {
  return (
  	<div className="product-item" >
	    <div className="overlay-container">
	    	<div className="product-img"></div>
	    	<div className="overlay">
			    <Link href={{ pathname: '/product', query: { id: product.id } }}><a href={ `/product?id=${ product.id }` } className="button">View Details</a></Link>
	    	    <button onClick={ add }>Add to Cart</button>
			</div>
	    </div>
	    <span>{ product.brand }</span>
	    <h4>{ product.title }</h4>
	    <span className="price"><FormattedNumber value={ product.price } style="currency" currency={ 'USD' } /></span>

		<style jsx>{`
			.product-item {
				display: inline-block;
				margin: 0.75em;
				width: 100%;
				max-width: 18em;
				position: relative;
			}

			.product-item .overlay-container {
				position: relative;
				margin-bottom: 0.5em;
			}

			.product-item .overlay-container .overlay {
				display: none;
				padding-top: 40px;
			}


			.product-item .overlay-container .overlay button {
				display: block;
				margin: 40px auto auto;
			}

			.product-item h4 {
				font-size: 0.8em;
				text-transform: uppercase;
				padding: 10px 0;
			}

			.product-item .price {
				display: block;
				padding-bottom: 10px;
			}

			.product-item .overlay-container .product-img {
				background-size: cover;
    			background-position: center center;
    			background-image: url("/static/${ product.image }");
				width: 18em;
				height: 18em;
				position: relative;
				overflow: hidden;
				cursor: pointer;
				transition: box-shadow 0.25s;
			}

			.product-item:hover .overlay-container .overlay {
				display: block;
				position: absolute;
				background-color:rgba(0, 0, 0, 0.1);
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 5em;
				color: white;
				text-shadow: 0 0 5px rgba(0,0,0,0.5), 0 0 10px rgba(0,0,0,0.5); 
				transition: all 0.25s;
			}

			.product-item:hover {
				box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
			}
		`}</style>
    </div>
  )
}
