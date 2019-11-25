import React from 'react';
import { StyleSheet } from 'react-native';
import EasyToast from 'react-native-easy-toast';
import PropTypes from 'prop-types';

import { themes } from '../constants/colors';
import sharedStyles from '../views/Styles';
import EventEmitter from '../utils/events';
import { withTheme } from '../theme';

const styles = StyleSheet.create({
	toast: {
		maxWidth: 300,
		padding: 10
	},
	text: {
		...sharedStyles.textRegular,
		fontSize: 14,
		textAlign: 'center'
	}
});

export const LISTENER = 'Toast';

class Toast extends React.Component {
	static propTypes = {
		theme: PropTypes.string
	}

	componentDidMount() {
		EventEmitter.addEventListener(LISTENER, this.showToast);
	}

	shouldComponentUpdate() {
		return false;
	}

	componentWillUnmount() {
		EventEmitter.removeListener(LISTENER);
	}

	showToast = ({ message }) => {
		this.toast.show(message, 1000);
	}

	render() {
		const { theme } = this.props;
		return (
			<EasyToast
				ref={toast => this.toast = toast}
				position='center'
				style={[styles.toast, { backgroundColor: themes[theme].toastBackground }]}
				textStyle={[styles.text, { color: themes[theme].buttonText }]}
				opacity={0.9}
			/>
		);
	}
}

export default withTheme(Toast);
