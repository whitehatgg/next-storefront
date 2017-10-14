import { Provider } from 'mobx-react'
import { withRouter } from 'next/router'
import withStore from '../enhancers/withStore'

export default withStore(withRouter(({ children, store, router, href }) => (
  <Provider store={store} router={router} >
    { children }
  </Provider>
)))
