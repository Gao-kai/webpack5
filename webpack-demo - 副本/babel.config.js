module.exports = {
	presets:[
		["@babel/preset-env",{
			useBuiltIns:"usage", // 按需加载polyfill
			corejs:"3.21"
		}],
		["@babel/preset-react"],
		["@babel/preset-typescript"]
	],
	plugins:[
		// ["@babel/plugin-transform-runtime",{
		// 	"corejs":3
		// }],
		["react-refresh/babel"]
	]
}