import { inject, observer } from 'mobx-react'
import Head from 'next/head'
import Nav from './Nav'

export default inject('store')(observer(({ children, title, store }) => {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{ `${title} - Next Storefront` }</title>
      </Head>
      <Nav />
      <div className="content">
        { children }
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        p {
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          color: #586069;
        }
  
        a {
          color: #777777;
          text-decoration: none;
        }

        a:hover {
          color: #222222;
        }

        @-webkit-keyframes openUp {
          0% {
            -webkit-transform: translate(-50%, -50%) scale(0.5);
                    transform: translate(-50%, -50%) scale(0.5);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) scale(1);
                    transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes openUp {
          0% {
            -webkit-transform: translate(-50%, -50%) scale(0.5);
                    transform: translate(-50%, -50%) scale(0.5);
          }
          100% {
            -webkit-transform: translate(-50%, -50%) scale(1);
                    transform: translate(-50%, -50%) scale(1);
          }
        }

        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          text-transform: uppercase;
          padding: 1.3em 2em;
          margin: 0.5em 0;
          color: white;
          background: black;
          border: 2px solid black;
          -webkit-transition: all 0.1s;
          transition: all 0.1s;
          font-size: 12px;
          cursor: pointer;
          font-weight: bold;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        button:hover {
          color: black;
          background: white;
        }

        input {
          display: inline-block;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          padding: 1.2em 0.9em;
          margin: 0.5em 0.5em 0.5em 0;
          width: 70px;
          background: #f2f2f2;
          border: 1px solid #f2f2f2;
          -webkit-transition: all 0.1s;
          transition: all 0.1s;
          font-size: 14px;
        }

        .quantity {
          display: inline-block;
        }

        h1, h2, h3 {
          font-family: "Times New Roman", Georgia, Serif;
          padding: 0 20px;
          font-weight: 100;
          font-size: 2.5em;
        }

        h4, h5, h6 {
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        }

        .push-left {
          float: left;
        }

        .push-right {
          float: right;
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

        .container .content {
          margin: 0 auto;
          padding: 0;
          text-align: center;
        }

        .error {
          padding-top: 120px;
          display: block;
        }
      `}</style>
    </div>
  )
}))
