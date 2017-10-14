import { FormattedNumber } from 'react-intl'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'

export default inject('store', 'router')(observer(({ store, router }) => {
  const id = router.query.id
  const product = store.getProductById(id)
  //render message if can't find product
  if (!product) {
    return (
      <p>Product not available <Link href="/"><a>Go back home</a></Link></p>
    )
  }

  return (
    <div className="product-page">
      <ul className="breadcrumb">
        <li><Link href="/"><a>Home</a></Link></li>
        <li>/</li>
        <li>{ product.title }</li>
      </ul>
      <div className="product-details">
        <img className="product-img" src={ `/static/${ product.image }` } />
        <span>{ product.brand }</span>
        <h2>{ product.title }</h2>
        <span><FormattedNumber value={ product.price } style="currency" currency={ 'USD' } /></span>
        <p>{ product.description }</p>
        <input type="number" min="1" value={ store.quantity } onChange={ (event) => store.setProductQuantity(event.target.value) } />
        <button onClick={ () => store.addToCart(id, store.quantity) }>Add to Cart</button>
      </div>

      <style jsx>{`
        ul.breadcrumb {
          list-style: none;
        }

        ul.breadcrumb li {
          display: inline-block;
          padding-right: 10px;
        }

        img.product-img {
          float: left;
        }
      `}</style>
    </div>
  )
}))