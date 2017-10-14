import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'

@inject('store') @observer
class ProductList extends React.Component {
  componentDidMount () {
   this.props.store.addToCart()
  }

  componentWillUnmount () {
    this.props.store.removeFromCart()
  }

  render () {
    return (
      <div>
        { this.props.store.products.map((product) => {
            return <div className="product">{ product.title }</div>
        }) }
      </div>
    )
  }
}

export default ProductList
