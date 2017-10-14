import { inject, observer } from 'mobx-react'
import ProductItem from './ProductItem'

export default inject('store')(observer(({ store }) => {
  return (
    <div className="product-list">
    {
      store.products.map(( product, index ) => {
        return <ProductItem product={ product } id={ index } key={ index } add={() => store.addToCart(index, 1) } />
      })
    }
    </div>
  )
}))
