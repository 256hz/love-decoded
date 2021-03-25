module.exports = {
	presets: [ 'module:metro-react-native-babel-preset' ],
	plugins: [
		[
			'module-resolver',
			{
				root: [ './src' ],
				extensions: [
					'.ios.js',
					'.ios.jsx',
					'.ios.ts',
					'.ios.tsx',
					'.android.js',
					'.android.jsx',
					'.android.ts',
					'.android.tsx',
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
					'.json',
				],
				alias: {
					'@App': [ './App.tsx' ],
					'@assets': [ './assets/' ],
					'@screens': [ './src/screens/' ],
					'@elements': [ './src/elements/' ],
					'@redux': [ './src/redux/' ],
					'@util': [ './src/util' ],
				},
			},
		],
	],
};
