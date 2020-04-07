const {defaults} = require('jest-config');
module.exports = {
	setupFilesAfterEnv: [
		'<rootDir>/src/setupTests.js'
	],
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'js']
};
