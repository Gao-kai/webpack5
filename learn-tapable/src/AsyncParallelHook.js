class AsyncParallelHook  {
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
		
		// 构建每一个事件回调函数的第三个参数callback 这个callback就是注册事件回调函数时的callback
		// 每一次异步操作完成之后都去执行这个done函数看是否需要调用最终的resolveCallback告诉所有异步钩子执行完毕
		let index = 0;
		const done = ()=>{
			index++;
			if(index === this.tasks.length){
				resolveCallback();
			}
		}
		// 同步任务 代表所有的事件监听函数会一起开始立即执行
		this.tasks.forEach((task)=>{
			task(...args,done)
		})
	}
}

const asyncHook = new AsyncParallelHook(['name','age']);

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
	console.log('异步并行钩子执行完毕');
});
