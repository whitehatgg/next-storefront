export default ({ cart }) => {
  return (
    <div className={cart.length ? 'light' : ''}>
      Cart {cart.length}
      <style jsx>{`
        div {
          padding: 15px;
          color: #82FA58;
          display: inline-block;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  )
}
