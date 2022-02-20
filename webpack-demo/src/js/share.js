const getDate = ()=>{
	return new Date();
}

const getPrice = ()=>{
	return '100元人民币';
}

/* 基于commonjs语法 */
module.exports = {
	getDate,
	getPrice
}

