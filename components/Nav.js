import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import CartMenu from './CartMenu'

export default inject('store')(observer(({ store }) => {
	return (
		<div className="nav">
			<h1 className="col col-3">
			  <Link href="/">
			    <a><img src="/static/logo.png"/></a>
			  </Link>
			</h1>
			<nav className="col col-6">
			  <ul>
			    <li><Link prefetch href="/"><a href="/">Home</a></Link></li>
			    <li><Link prefetch href="/cart"><a href="/cart">Cart</a></Link></li>
			  </ul>
			</nav>
			<div className="col col-3">
			  <CartMenu />
			</div>

			<style jsx>{`
				.nav {
				  position: fixed;
				  z-index: 1000;
				  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
			      background: #ffffff;
				  display: block;
				  width: 100%;
				  border-bottom: 2px solid #f2f2f2;
				  text-transform: uppercase;
				  font-weight: bold;
				  font-size: 0.8em;
				}

				.nav h1 {
				  display: inline-block;
				}

				.nav nav {
				  display: inline-block;
				  display: inline-block;
				  vertical-align: middle;
				  float: none;
				  text-align: center;
				}

				.nav nav ul {
				  padding-left: 0;
				  margin-bottom: 0;
				  list-style: none;
				  display: inline-block;
				}

				.nav nav ul li {
				  float: left;
				  margin-right: 30px;
				}
	      	`}</style>
		</div>
	)
}))