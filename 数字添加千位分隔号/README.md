
给数字添加千位分隔号, 例如```12345678``` 添加之后得到 ```12,345,678```

最常想到的方法是倒着遍历:
```js
function addDelimiter(str) {
	var str = String(str);
	for(var i = str.length - 1, j = 0, res = []; i >= 0; i--, j++) {
		if( j > 0 && j%3 === 0 ) res.unshift(',');
		res.unshift( str.charAt(i) );
	}
	return res.join('');
}
```

用正则可以更优雅一点:
```js
str = String(str).replace(/(?!^)(?=(\d{3})+$)/g, ',')
```

