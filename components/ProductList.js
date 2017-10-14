import ProductItem from './ProductItem'

export default ({ products, addToCart }) => {
  return (
    <div>{
      products.map(( product, index ) => {
        return <ProductItem product={ product } key={ index } add={() => addToCart(index) } />
      })
    }</div>
  )
}
