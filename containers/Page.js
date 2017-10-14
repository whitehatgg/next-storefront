import { Provider } from 'mobx-react'
import withStore from '../enhancers/withStore'

export default withStore(({ children, store }) => (
  <Provider store={store}>
    { children }
  </Provider>
))
