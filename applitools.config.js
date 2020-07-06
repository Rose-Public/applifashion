module.exports = {
	concurrency: 10,
	apiKey: 'Icr6HPhmPvY108W110vnsbMUVbVHErWvyyr98Ndy56fPQ5Xo110',
	appName: 'AppliFashion',
	browser: [
	   // Add browsers with different viewports
	   {width: 1200, height: 700, name: 'chrome'},
	   {width: 1200, height: 700, name: 'firefox'},
	   {width: 1200, height: 700, name: 'edgechromium'},
	   {width: 768, height: 700, name: 'chrome'},
	   {width: 768, height: 700, name: 'firefox'},
	   {width: 768, height: 700, name: 'edgechromium'},
	   // Add mobile emulation devices
	   {deviceName: 'iPhone X', screenOrientation: 'portrait'}
	],
	batchName: 'UFG Hackathon'
}
