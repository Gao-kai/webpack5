class SyncLoopHook {
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
		this.tasks.forEach(task=>{
			let result;
			do{
				result = task(...args);
			}while(result !== undefined)
		});
	}
}

const syncHook = new SyncLoopHook(['name','age']);

syncHook.tap('event1',(name,age)=>{
	console.log('my age is',age);
})

syncHook.tap('event2',(name,age)=>{
	console.log('my name is',name);
})

syncHook.call('lilei',18);
