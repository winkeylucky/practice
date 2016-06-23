
给数字添加千位分隔号, 例如```12345678``` 添加之后得到 ```12,345,678```

最常想到的方法是倒着遍历:
```js
function addDelimiter(str) {
	var str = String(str), tmp;
	for(var len = str.length - 1, i = 0, res = []; i <= len; i++) {
		tmp = str.charAt(len - i);		//用tmp暂存, 防止 -123456789 添加为 -,123,456,789
		if( i > 0 && i%3 === 0 && +tmp >= 0 ) res.unshift(',');
		res.unshift( tmp );
	}
	return res.join('');
}

addDelimiter(12345678);  // "12,345,678"
addDelimiter(-123456789);  // "-123,456,789"
```

如果传入的数没有超过溢出```Number```的范围, 可以这么优雅
```js
function addDelimiter( num ) {
	for(var tmp, res = ''; tmp = ~~(num/1000); num = tmp)
		res = ',' + Math.abs(num%1000) + res;
	return num + res;
}

addDelimiter(1234567890);   // "1,234,567,890"
addDelimiter(-12345678);   // "-12,345,678"
```

用正则可以更优雅很多:
```js
'12345678'.replace(/(?!^)(?=(\d{3})+$)/g, ',');  	// "12,345,678"

'-123456789'.replace(/(?!^)(?=(\d{3})+$)/g, ','); // "-,123,456,789" 问题来了

// 由于js的正则没有后向引用, 只能包装一层, 如下:
'-123456789'.replace(/(\-?)(\d+)/, function($0, $1, $2) {
	return $1 + $2.replace(/(?!^)(?=(\d{3})+$)/g, ',');
});

function addDelimiter( num ) {
	return String(num).replace(/(\-?)(\d+)/, function($0, $1, $2) {
		return $1 + $2.replace(/(?!^)(?=(\d{3})+$)/g, ',');
	});
}

addDelimiter( '-123456789' ); // "-123,456,789"
addDelimiter( 123456789 ); // "123,456,789"

// perfect!
```

