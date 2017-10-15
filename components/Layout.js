import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import Head from 'next/head'
import CartMenu from './CartMenu'

export default inject('store')(observer(({ children, title, store }) => {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{ `${title} - Next Storefront` }</title>
      </Head>
      <div className="header">
        <h1 className="col col-3">
          <Link href="/">
            <img src="/static/logo.png"/>
          </Link>
        </h1>
        <nav className="col col-6">
          <ul>
            <li><Link prefetch href="/"><a>Home</a></Link></li>
            <li><Link prefetch href="/cart"><a>Cart</a></Link></li>
          </ul>
        </nav>
        <div className="col col-3">
          <CartMenu />
        </div>
      </div>
      <div className="content">
        { children }
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Bitter";
        }

        .col {
          float: none;
          display: inline-block;
          vertical-align: middle;
        }

        .col-6 {
          width: 50%;
        }

        .col-3 {
          width: 25%;
        }

        .container .header {
          display: block;
          width: 100%;
        }

        .container .header h1 {
          display: inline-block;
        }

        .container .header nav {
          display: inline-block;
          display: inline-block;
          vertical-align: middle;
          float: none;
          text-align: center;
        }

        .container .header nav ul {
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
          display: inline-block;
        }

        .container .header nav ul li {
          float: left;
          margin-right: 10px;
        }

        .container .content {
          margin: 0 auto;
          padding: 0.5em;
          text-align: center;
        }
      `}</style>
    </div>
  )
}))
