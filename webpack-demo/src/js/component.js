import '../css/component.less';
import '../css/index.css';
import imgSrc from "../img/test1.jpg";

/* 创建一个div */
function createElement() {
	const ele = document.createElement('div');
	ele.innerHTML = ['Hello', 'World'].join(" ");
	ele.className = 'container';
	document.body.appendChild(ele);
}
createElement();

/* 创建一个图片实例用于测试 */
let img = new Image();
img.src = imgSrc;
img.style.width = 200 + 'px';
img.style.height = 200 + 'px';
document.body.appendChild(img);


/* 创建第二个实例用于测试 */
const ele1 = document.createElement('div');
ele1.style.width = 200 + 'px';
ele1.style.height = 200 + 'px';
ele1.className = 'bg-image';
document.body.appendChild(ele1);

/* 创建一个span标签用于测试字体文件 */
const span = document.createElement('span');
span.className = 'iconfont iconsmiling icon-demo';
document.body.appendChild(span);


