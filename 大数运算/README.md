

js的Number类型是使用的 8 个字节表示, 使用的双精度浮点格式, 最大安全数值为 ```2^53 - 1 = 9007199254740991```, 详情请看[MDN_Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

如果要表示超长数字相加只能用字符串或数组模拟了.

最简单的超长整数相加:
```js
function add(a, b) {

	// 先将a, b转成字符串, 然后断开成数组
	a = String(a).split('');
	b = String(b).split('');

	var i = Math.max(a.length, b.length);	// 得到长度更长数组的长度存放在i中
	var de = 0;														// 是否进位
	var tmp;
	var res = [];

	while( i-- ) {
		tmp = +(a.pop() || 0) + +(b.pop() || 0) + de;
		res.unshift( tmp%10 );
		de = tmp >= 10 ? 1 : 0;
	}
	if(de) res.unshift(de);

	return res.join('');
}
```
