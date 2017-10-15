import { IntlProvider } from 'react-intl'
import { Provider } from 'mobx-react'
import { withRouter } from 'next/router'
import withStore from '../enhancers/withStore'
import formats from '../constants/formats'

export default withStore(withRouter(({ children, store, router }) => (
  <Provider store={store} router={router} >
  	<IntlProvider locale="en" formats={ formats } defaultFormats={ formats } > 
    	{ children }
    </IntlProvider>
  </Provider>
)))
