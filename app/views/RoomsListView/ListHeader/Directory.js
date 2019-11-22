import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Touch from '../../../utils/touch';
import { CustomIcon } from '../../../lib/Icons';
import I18n from '../../../i18n';
import styles from '../styles';
import DisclosureIndicator from '../../../containers/DisclosureIndicator';
import { themes } from '../../../constants/colors';
import { withTheme } from '../../../theme';


const Directory = React.memo(({ goDirectory, theme }) => (
	<Touch
		onPress={goDirectory}
		theme={theme}
	>
		<View
			style={[
				styles.dropdownContainerHeader,
				{ borderBottomWidth: StyleSheet.hairlineWidth, borderColor: themes[theme].separatorColor }
			]}
		>
			<CustomIcon style={[styles.directoryIcon, { color: themes[theme].tintColor }]} size={22} name='discover' />
			<Text style={[styles.directoryText, { color: themes[theme].tintColor }]}>{I18n.t('Directory')}</Text>
			<DisclosureIndicator theme={theme} />
		</View>
	</Touch>
));

Directory.propTypes = {
	goDirectory: PropTypes.func,
	theme: PropTypes.string
};

export default withTheme(Directory);
