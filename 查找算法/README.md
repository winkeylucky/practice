
### 二分查找法
对一个已经排好序的数组查找, 找到返回索引值, 找不到返回 ```-1```
循环中, mid变量作为动态变化的值, 注意其边界条件
```js
function find(arr, value) {
	var from = 0, to = arr.length - 1, mid;
	while(from <= to) {
		mid = Math.floor( (from + to)/2 );
		if( value > arr[mid] ) {
			from = mid + 1;
		} else if( value < arr[mid] ) {
			to = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

find([1, 3, 5, 7, 9], 7); //3
```

### 插值查找法
如果数组中元素增长较均匀, 速度比二分查找法快. 如果数组元素值波动较大, 性能则明显下降
```js
function find(arr, value) {
	var from = 0, to = arr.length - 1, mid;
	while(from <= to) {
		mid = Math.floor( ((value - arr[from])/(arr[to] - arr[from]))*(to - from) + from );
		if( value > arr[mid] ) {
			from = mid + 1;
		} else if( value < arr[mid] ) {
			to = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

find([1, 3, 5, 7, 9, 11, 13, 15], 9); //3
```



### 斐波拉契查找法
待续...