import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../store/actions'
import ProductItem from './ProductItem'

class ProductList extends Component {
  render () {
    const { products } = this.props
    return (
      <div className="product-list">
	    {
	      products.map(( product ) => {
	        return <ProductItem product={ product } key={ product.id } add={ () => { this.props.dispatch(addToCart(product.id, 1)) }} />
	      })
	    }
      </div>
    )
  }
}

const mapStateToProps = ({ products }) => ({ products })
export default connect(mapStateToProps)(ProductList)
