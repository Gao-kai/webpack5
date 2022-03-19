(self.webpackChunkwebpack_demo = self.webpackChunkwebpack_demo || []).push([
	[179], {
		"./src/css/index.css":
			/*!***************************!*\
			  !*** ./src/css/index.css ***!
			  \***************************/
			function(s, c, e) {
				"use strict";
				e.r(c)
			},
		"./src/main.js":
			/*!*********************!*\
			  !*** ./src/main.js ***!
			  \*********************/
			function(s, c, e) {
				"use strict";
				e.r(c);
				e( /*! ./css/index.css */ "./src/css/index.css"), e( /*! ./test/terserTest.js */
					"./src/test/terserTest.js");
				console.log("这是main.js入口相关的代码1")
			},
		"./src/test/terserTest.js":
			/*!********************************!*\
			  !*** ./src/test/terserTest.js ***!
			  \********************************/
			function() {
				console.log(function(s, c) {
					return s + c
				}(100, 200));
				const s = new class {
					constructor(s, c) {
						this.name = s, this.age = c
					}
				}("lilei", 18);
				console.log(s)
			}
	},
	function(s) {
		var c;
		c = "./src/main.js", s(s.s = c)
	}
]);
