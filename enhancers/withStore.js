import { compose, withState, setStatic, withProps } from 'recompose'
import { initStore } from '../middlewares/storeMiddleware'
import Store from '../stores/store'
import products from '../data/products.json'

export default compose(
  // set the static async method getInitialProps
  setStatic(
    'getInitialProps',
    async ({ req }) => {
      const isServer = !!req
      const store = initStore(Store, products, isServer)
      return { isServer }
    }
  ),
  // add store to props
  withProps(props => {
    return {
      store: initStore(Store, products)
    }
  })
)
