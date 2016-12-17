'use strict';

// Constants
const backgroundColor = 'rgba(22, 22, 27, .9)';
const foregroundColor = '#cbcfd4';

// Colors
const RED = '#d1267f';
const GREEN = '#00da90';
const YELLOW = '#f8fb3c';
const BLUE = '#009ce6';
const MAGENTA = '#ec26cd';
const LIGHT_GRAY = '#f2f2f2';
const DARK_GRAY = '#686868';

// Mapped Colors
const colors = {
  black: backgroundColor,
	red: RED,
	green: GREEN,
	yellow: YELLOW,
	blue: BLUE,
	magenta: MAGENTA,
	cyan: BLUE,
	white: LIGHT_GRAY,
	lightBlack: DARK_GRAY,
	lightRed: RED,
	lightGreen: GREEN,
	lightYellow: YELLOW,
	lightBlue: BLUE,
	lightMagenta: MAGENTA,
	lightCyan: BLUE,
	colorCubes: '#ffffff',
	grayscale: foregroundColor
};

// Additional constants
const cursorColor = LIGHT_GRAY;
const borderColor = backgroundColor;

exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');
exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
	  foregroundColor,
		backgroundColor,
		borderColor,
		cursorColor,
		colors,
		css: `
			${config.css || ''}
			.cursor-node {
				backgroundColor: ${BLUE} !important;
				border-color: ${BLUE} !important;
			}
			.hyper_main {
			  border: none !important;
			}
			.tab_tab {
			  border: 0;
			}
			.tab_textActive {
			  border-bottom: 2px solid ${BLUE};
			}
		`
	})
}
