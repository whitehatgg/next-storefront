import { FormattedNumber } from 'react-intl'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import NumberPicker from './NumberPicker'

export default inject('store', 'router')(observer(({ store, router }) => {
  const product = store.getProductById(router.query.id)
  if (!product) {
    return (
      <div className="error">
        <p>Product not available <Link href="/"><a href="/">Go back home</a></Link></p>
      </div>
    )
  }

  return (
    <div className="product-page">
      <ul className="breadcrumb">
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li>/</li>
        <li className="current">{ product.title }</li>
      </ul>
      <div className="product-details">
        <div className="product-img"></div>
        <div className="product-content">
          <span className="brand">{ product.brand }</span>
          <h2>{ product.title }</h2>
          <span className="price"><FormattedNumber value={ product.price } style="currency" currency={ 'USD' } /></span>
          <p className="description">{ product.description }</p>
          <NumberPicker min={ 1 } value={ store.quantity } onChange={ (value) => store.setProductQuantity(value) } />
          <button onClick={ () => store.addToCart(product.id, store.quantity) }>Add to Cart</button>
        </div>
      </div>

      <style jsx>{`
        .product-page {
          background-color: #ffffff;
          padding-bottom: 100px;
        }

        .product-page ul.breadcrumb {
          list-style: none;
          padding: 30px 0 60px 0;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 0.8em;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        }

        .product-page ul.breadcrumb li {
          display: inline-block;
          padding-right: 10px;
        }

        .product-page ul.breadcrumb li.current {
          color: #a8a8a8;
        }

        .product-page .product-img {
          float: left;
          width: 60%;
          height: 400px;
          display: inline-block;
          background-size: cover;
          background-position: center center;
          background-image: url("/static/${ product.image }");
        }

        .product-page .product-details {
          width: 80%;
          margin: auto;
          padding-right: 50px;
          padding-left: 50px;
        }

        .product-page .product-details .product-img {
          margin-right: 50px;
          margin-bottom: 20px;
        }

        .product-page .product-details .brand {
          padding-bottom: 21px;
          display: block;
        }

        .product-page .product-details .price {
          color: #a8a8a8;
          display: block;
          padding: 15px;
          font-size: 1.2em;
          font-family: "Times New Roman", Georgia, Serif;
        }

        .product-page .product-details .description {
          margin-bottom: 40px;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .product-page .product-img {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}))