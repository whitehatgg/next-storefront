import React from 'react'

import { loadData } from '../store/actions'
import { withReduxSaga } from '../store'
import Layout from '../components/Layout'
import HomePage from '../components/HomePage'

class Home extends React.Component {
  static async getInitialProps ({store}) {
    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
  }

  render () {
    return (
      <Layout title='Home Page'>
        <HomePage />
      </Layout>
    )
  }
}

export default withReduxSaga(Home)
