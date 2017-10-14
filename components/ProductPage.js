import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import ProductList from './ProductList'

export default inject('store', 'router')(observer(({ store, router }) => {
  const id = router.query.id;
  const product = store.products[id]
  return (
    <div className="product-page">
      <ul className="breadcrumb">
        <li><Link href="/"><a>Home</a></Link></li>
        <li>/</li>
        <li>{ product.title }</li>
      </ul>

      <div>
      <img src={ `/static/${ product.image }` } />
      <p>{ product.description }</p>
      <input type="number" value={ store.quantity } onChange={ (event) => store.setQuantity(event.target.value) } />
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
      `}</style>
    </div>
  )
}))