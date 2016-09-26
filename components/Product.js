const React = require('react')

class Product extends React.Component{
	render(){
		return(
			<div className="product">
	         <h1>Name: {this.props.name}</h1>
	         <h2>Producer: {this.props.producer}</h2>
	         <p>Watermarked? ({this.props.hasWatermark})</p>
	         <p>Color: {this.props.color}</p>
	         <p>Weight: {this.props.weight}</p>
	       </div>
			)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
	weight: function(props, propName, componentName) {
	     let weight = props[propName];
	     if(typeof weight === 'number'){
		     if (weight < 80 || weight > 300) {
		       return new Error(propName + ' in ' + componentName + " is above or below weight limits");
		    }
		}
  	}
}


module.exports = Product