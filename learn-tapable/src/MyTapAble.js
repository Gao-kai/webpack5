const {
	SyncHook,
	SyncBailHook,
	SyncLoopHook,
	SyncWaterfallHook
} = require('tapable');

class MyTapAble {
	constructor() {
		this.hooks = {
			syncHook:new SyncHook(["name","age"]),
			syncBailHook:new SyncBailHook(["name","age"]),
			syncLoopHook:new SyncLoopHook(["name","age"]),
			syncWaterfullHook:new SyncWaterfallHook(["name","age"])
		}
		
		// 监听事件1
		this.hooks.syncHook.tap('event1',(name,age)=>{
			console.log('event1',name,age);
		})
		
		// 监听事件2
		this.hooks.syncHook.tap('event2',(name,age)=>{
			console.log('event2',name,age);
		})
	}
	
	emit(){
		this.hooks.syncHook.call('lilei',18)
	}
	
}

const myTapable = new MyTapAble();
myTapable.emit();