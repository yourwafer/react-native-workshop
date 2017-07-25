import React from 'react-native';
import NavContainer from './NavContainer';
const {
	PureComponent,
	View
} = React;

export default class extends PureComponent {
	render() {
		return (
			<View>
				<NavContainer />
			</View>
		);
	}
}