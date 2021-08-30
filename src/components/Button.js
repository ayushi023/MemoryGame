import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';

class Button extends React.Component{

	constructor(props){
		super(props);

		this.cardBackground = this.cardBackground.bind(this);
		
	}

	cardBackground(id){
		if(id % 8 == 0){
			return(require('../img/1.png'));
		}
		if(id % 8 == 1){
			return(require('../img/2.png'));
		}
		if(id % 8 == 2){
			return(require('../img/3.png'));
		}
		if(id % 8 == 3){
			return(require('../img/4.png'));
		}
		if(id % 8 == 4){
			return(require('../img/5.png'));
		}
		if(id % 8 == 5){
			return(require('../img/6.png'));
		}
		if(id % 8 == 6){
			return(require('../img/7.png'));
		}
		if(id % 8 == 7){
			return(require('../img/8.png'));
		}
		else{
			return(require('../img/card.png'));
		}
	}

	
	render(){

		let src = require('../img/card.png');
		
		if(this.props.isOpen){
			src = this.cardBackground(this.props.src);
		}

		return(
			<TouchableOpacity 
				onPress={this.props.clickCard}
				style={styles.btn}
				>
				<Image 
					style={styles.card} 
					source={src} />

			</TouchableOpacity>	
		);
	}
}

const styles={
	btn:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white',
		borderRadius:12,
		margin:8
	},
	card:{
		width:50,
		height:50,
	}
}

export default Button;