class SyncBailHook  {
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
	
	/* 
		do-while循环很适合这种先执行一次，然后再进行判断的场景
	 */
	call(...args){
		let index = 0;  // 数组中第一个函数必须执行，执行之后才会判断是否有返回值
		let res = null; // 函数的返回值
		do{
			res = this.tasks[index++](...args);
		}while(res===undefined && index < this.tasks.length )
	}
}

const syncHook = new SyncBailHook(['name','age']);

syncHook.tap('event1',(name,age)=>{
	console.log('my age is',age); 
	return age;
})

syncHook.tap('event2',(name,age)=>{
	console.log('my name is',name);
})


syncHook.call('lilei',18);
