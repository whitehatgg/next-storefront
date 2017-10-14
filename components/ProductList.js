import { inject, observer } from 'mobx-react'
import ProductItem from './ProductItem'

export default inject('store')(observer(({ store }) => {
  return (
    <div className="product-list">
    {
      store.products.map(( product ) => {
        return <ProductItem product={ product } key={ product.id } add={() => store.addToCart(product.id, 1) } />
      })
    }
    </div>
  )
}))
