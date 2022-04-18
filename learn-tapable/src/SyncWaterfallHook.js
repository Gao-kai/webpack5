class SyncWaterfallHook  {
	constructor() {
		this.tasks = [];
	}
	/**
	 * @param name {string|object} 订阅事件名称
	 * @param task {function} 订阅事件触发时的回调函数
	 */
	tap(name,task){
		this.tasks.push(task);
	}
	
	
	call(...args){
		// 先将第一个函数和其他函数进行分割
		let [firstFn,...otherFns] = this.tasks;
		// 拿到第一个函数的返回值 当做初始值
		let fitstFnResult = firstFn(...args);
		// 拿到除了第一个参数之外的其他参数
		let otherArgs = args.slice(1);
		/* 
			使用reduce实现
			第一次执行的时候，会将第一个函数执行的返回值fitstFnResult传递给prev，curr就是others函数数组中的第一个函数，执行curr函数并将第一个函数的返回值prev当做第一个参数传入，curr函数的返回值会被直接赋值给下一次循环的prev参数，依次类推...
		 */
		otherFns.reduce((prev,curr)=>{
			return curr(prev,...otherArgs);
		},fitstFnResult)
	}
}

const syncHook = new SyncWaterfallHook(['name','age']);

syncHook.tap('event1',(name,age)=>{
	console.log('my age is',age); 
	return 'tom';
})

syncHook.tap('event2',(name,age)=>{
	console.log('my name is',name);
	console.log('my age is',age);
})


syncHook.call('lilei',18);
