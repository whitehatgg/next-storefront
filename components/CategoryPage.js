import { inject, observer } from 'mobx-react'
import ProductList from './ProductList'

export default inject('store')(observer(({ store }) => {
  return (
    <div className="category-page">
      <div className="hero-container">
        <div className="hero">
          <h2>Plates</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque mollis aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <ProductList />

      <style jsx>{`
        .hero-container {
          position: relative;
          background: url("/static/plates-header.jpg");
          background-size: cover;
          height: 25em;
          width: 100vw;
          margin-bottom: 30px;
        }

        .hero-container .hero {
          padding: 130px 20px;
          position: absolute;
          text-align: center;
          width: 50vw;
          top: 50%;
          left: 50%;
          height: 100%;
          transform: translate(-50%, -50%);
          color: white;
          background: linear-gradient(to bottom, #514e4a , #3a3835); 
          box-shadow: inset -1px -3px 5px rgba(0,0,0,0.5), inset 1px 3px 5px rgba(0,0,0,0.5);
          text-shadow: 1px 3px 5px rgba(0,0,0,0.5), -1px -3px 5px rgba(0,0,0,0.5);
          vertical-align: middle;
        }

        .hero-container .hero h2 {
          font-size: 3em;
          border-bottom: 1px solid #fff;
          display: inline-block;
          padding-bottom: 10px;
          margin-bottom: 15px;
          padding-left: 0;
          padding-right: 0;
        }

        .hero-container .hero p {
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}))
