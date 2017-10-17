import NumericInput from 'react-numeric-input'

export default (props) => {
	return (
		<div className="number-picker">
			<NumericInput { ...props } style={ false } />
			<style jsx global>{`
				.number-picker {
					position: relative;
					display: inline-block;
				}

				.number-picker .react-numeric-input input {
				    padding-left: 15px;
      				width: 80px;
				    display: block;
				    -webkit-appearance: none;
				    line-height: normal;
		        }

		        .number-picker .react-numeric-input b {
					position: absolute;
				    right: 8px;
				    width: 24px;
				    height: 24px;
				    text-align: center;
				    cursor: default;
				    background-color: #dcdcdc;
				    cursor: pointer;
		        }

		        .number-picker .react-numeric-input b i {
					position: absolute;
				    left: 80%;
				    width: 0px;
				    height: 0px;
		        }

		        .number-picker .react-numeric-input b:nth-child(2) {
					top: 10px;
		        }

		        .number-picker .react-numeric-input b:nth-child(2):before {
				    content: "+";
				    vertical-align: middle;
		        }

		        .number-picker .react-numeric-input b:nth-child(3) {
				    bottom: 8px;
		        }

		        .number-picker .react-numeric-input b:nth-child(3):after {
				    content: "-";
				    vertical-align: middle;
		        }
			`}</style>
		</div>
	)
}
        