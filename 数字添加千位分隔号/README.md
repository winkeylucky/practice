
给数字添加千位分隔号, 例如```12345678``` 添加之后得到 ```12,345,678```

最常想到的方法是倒着遍历:
```js
function addDelimiter(str) {
	var str = String(str);
	for(var len = str.length - 1, i = 0, res = []; i <= len; i++) {
		if( i > 0 && i%3 === 0 ) res.unshift(',');
		res.unshift( str.charAt(len - i) );
	}
	return res.join('');
}

addDelimiter(12345678);  // "12,345,678"
```

用正则可以更优雅一点:
```js
var num = 12345678;
String(num).replace(/(?!^)(?=(\d{3})+$)/g, ',');

// "12,345,678"
```

