import Link from 'next/link'

export default ({ product, id, add }) => {
  return (
  	<div className="product" >
    <h3>{ product.title }</h3>
    <img src={ `/static/${ product.image }` } />
    <span>{ product.brand }</span>
    <p>{ product.description }</p>
    <button onClick={ add }>Add to Cart</button>
    <Link href={{ pathname: '/product', query: { id: id } }}><button>View Details</button></Link>
	<style jsx>{`
		.product {
			display: inline-block;
			margin: 0.75em;
			width: 100%;
			max-width: 18em;
		}

		.product img {
			width: 18em;
			height: 18em;
			margin-bottom: 0.5em;
			position: relative;
			overflow: hidden;
			cursor: pointer;
			transition: box-shadow 0.25s;
		}

		@media(max-width: 600px) {
			.product img {
				width: 100vw;
				height: 100vw;
			}
		}

		.product img:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,0.5);
			opacity: 0;
			transition: all 0.25s;
		}

		.product img:after {
			content: "\f00e";
			font-family: "FontAwesome";
			position: absolute;
			top: 250%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 5em;
			color: white;
			pointer-events: none;
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
