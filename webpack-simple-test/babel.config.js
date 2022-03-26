const presets = [
		["@babel/preset-env",{
			useBuiltIns:"usage", // 按需加载polyfill
			corejs:"3.21"
		}],
		["@babel/preset-react"],
		["@babel/preset-typescript"]
	];

const plugins = [];

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === 'development'){
	plugins.push(["react-refresh/babel"]);
	console.log('development',plugins);
}else{
	plugins.push(["@babel/plugin-transform-runtime",{
		"corejs":3
	}]);
	console.log('production',plugins);
}

module.exports = {
	presets,
	plugins
}