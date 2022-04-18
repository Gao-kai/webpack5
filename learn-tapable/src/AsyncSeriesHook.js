class AsyncSeriesHook  {
	constructor() {
		this.tasks = [];
	}
	/**
	 * @param name {string|object} 订阅事件名称
	 * @param task {function} 订阅事件触发时的回调函数
	 */
	tapAsync(name,task){
		this.tasks.push(task);
	}
	
	callAsync(...args){
		// 首先取出callAsync函数执行时的最后一个参数，也就是告诉所有钩子执行完成的回调函数
		const resolveCallback = args.pop();
		
		// 递归调用
		let index = 0;
		let next = ()=>{
			if(index === this.tasks.length){
				resolveCallback();
				return;
			}
			let task = this.tasks[index++]
			// 执行task异步任务 只有执行完成之后才会执行next接着执行下一个异步任务
			task(...args,next);
		}
		
		next();
	}
}

const asyncHook = new AsyncSeriesHook(['name','age']);

asyncHook.tapAsync('event1',(name,age,callback)=>{
	setTimeout(()=>{
		console.log('event1',name,age);
		callback();
	},2000)
})

asyncHook.tapAsync('event2',(name,age,callback)=>{
	setTimeout(()=>{
		console.log('event2',name,age);
		callback();
	},1000)
})


asyncHook.callAsync('lilei',18,function(){
	console.log('异步串行钩子执行完毕');
});
