import { inject, observer } from 'mobx-react'
import ProductList from './ProductList'

export default inject('store')(observer(({ store }) => {
  return (
    <div className="category-page">
      <div className="hero-container">
        <div className="hero">
          <h1>Plates</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque mollis aliquam..</p>
        </div>
      </div>

      <h2>Products</h2>
      <ProductList products={ store.products } addToCart={ store.addToCart } />

      <style jsx>{`
        .hero-container {
          position: relative;
          background: url("/static/plates-header.jpg");
          background-size: cover;
          height: 25em;
          width: 100vw;
        }

        .hero-container .hero {
          position: absolute;
          text-align: center;
          width: 50vw;
          top: 50%;
          left: 50%;
          height: 100%;
          transform: translate(-50%, -50%);
          color: white;
          background: linear-gradient(to bottom, #16222A , #24292e); 
          box-shadow: inset -1px -3px 5px rgba(0,0,0,0.5), inset 1px 3px 5px rgba(0,0,0,0.5);
          text-shadow: 1px 3px 5px rgba(0,0,0,0.5), -1px -3px 5px rgba(0,0,0,0.5);
          vertical-align: middle;
        }

        .hero-container .hero h1 {
          font-size: 3em;
        }

        .hero-container .hero p {

        }
      `}</style>
    </div>
  )
}))
