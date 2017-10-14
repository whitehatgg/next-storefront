import ProductItem from './ProductItem'

export default ({ products, addToCart }) => {
  return (
    <div>{
      products.map(( product, index ) => {
        return <ProductItem product={ product } id={ index } key={ index } add={() => addToCart(index, 1) } />
      })
    }</div>
  )
}
