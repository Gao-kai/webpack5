const message:string = "Hello World";
function sum(a:number,b:number){
	return a+b;
}

console.log(sum(0,'100'));

function getData(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('1s之后返回数据')
		},1000)
	})
}

getData().then(res=>{
	console.log(res);
})