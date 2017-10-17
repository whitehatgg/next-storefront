import { shallow } from 'enzyme'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import CartItem from '../../components/CartItem.js'
import products from '../../data/products.json'
import formats from '../../constants/formats'
import Store from '../../stores/store'

describe('CartItem Test', () => {
  let store = null
  beforeEach(() => {
    store = new Store(products)
  })

  it('shows item', () => {
    const product = store.products[0]
    const shallowComponent = shallow(
      <CartItem
        product={ product }
        quantity={ 1 }
        remove={() => store.removeFromCart(product.id, 1) }
        setQuantity={ (value) => store.setCartQuantity(product.id, value) }
      />
    )
    expect(shallowComponent.find('img').prop('src')).toEqual('/static/blue-stripe-stoneware-plate.jpg')
  })
})
