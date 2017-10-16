import { shallow } from 'enzyme'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import ProductItem from '../../components/ProductItem.js'
import products from '../../data/products.json'
import formats from '../../constants/formats'
import Store from '../../stores/store'

describe('ProductItem Test', () => {
  let store = null
  beforeEach(() => {
    store = new Store(products)
  })

  it('shows item', () => {
    const product = store.products[0]
    const shallowComponent = shallow(
      <ProductItem 
        product={ product }
        key={ product.id }
        add={() => store.addToCart(product.id, 1) }
      />
    )
    expect(shallowComponent.find('button').text()).toEqual('Add to Cart')
  })

  it('shows item in Snapshot Testing', () => {
    const product = store.products[0]
    const shallowComponent = renderer.create(
      <IntlProvider locale="en" formats={ formats } defaultFormats={ formats } >
        <ProductItem 
          product={ product }
          key={ product.id }
          add={() => store.addToCart(product.id, 1) }
        />
      </IntlProvider>
    )
    const tree = shallowComponent.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
