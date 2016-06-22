

js的Number类型是使用的 8 个字节表示, 使用的双精度浮点格式, 最大安全数值为 ```2^53 - 1 = 9007199254740991```, 详情请看[MDN_Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

如果要表示超长数字相加只能用字符串或数组模拟了.

最简单的超长整数相加:
```js
function add(a, b) {
	// 先将a, b转成字符串, 然后断开成数组
	a = String(a).split('');
	b = String(b).split('');

	var i = Math.max(a.length, b.length);	// 得到长度更长数组的长度存放在i中
	var de = 0, tmp, res = '';

	// 执行i次循环, 每次把数组最后一位弹出相加, 数组可能长度不等, 如果短数组全部弹出之后再次pop则为undefined, 此时取0
	while( i-- ) {
		tmp = +(a.pop() || 0) + +(b.pop() || 0) + de;
		res = tmp%10 + res;
		de = tmp >= 10 ? 1 : 0;
	}
	if(de) res = de + res;

	return res || '0';
}

add('98765439876128765434567893456789876543', '678867899026789034567567896789'); 

// "98765440554996664461356928024357773332"
```

### 包含小数的大数相加:
```js
function add(a, b) {
	a = String(a).split('.');
	b = String(b).split('.');

	var decimal = addDecimal(a[1] || '', b[1] || '');
	var integer = addInteger(a[0] || '', b[0] || '', decimal.de);

	return (integer + '.' + decimal.res).replace(/\.?0+$/, '')
}

function addInteger(a, b, de) {
	a = a.split('');
	b = b.split('');

	var i = Math.max(a.length, b.length);	// 得到长度更长数组的长度存放在i中
	var de = de || 0, tmp, res = [];

	while( i-- ) {
		tmp = +(a.pop() || 0) + +(b.pop() || 0) + de;
		res.unshift( tmp%10 );
		de = tmp >= 10 ? 1 : 0;
	}
	if(de) res.unshift(de);

	return res.join('');
}

function addDecimal(a, b) {
	a = a.split('');
	b = b.split('');

	for(var i = Math.max(a.length, b.length) - 1, de = 0, tmp, res = []; i >= 0; i--) {
		tmp = +(a[i] || 0) + +(b[i] || 0) + de;
		res.unshift( tmp%10 )
		de = tmp >= 10 ? 1 : 0;
	}

	return { de: de, res: res.join('') };
}

add('534534567856789678.999999999', '8.000000001');  // "534534567856789687"
```


### 大数相乘:
待续...
