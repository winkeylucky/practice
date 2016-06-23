
先看 [排序可视化效果](https://flfwzgl.github.io/practice/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/sort.html)


### 冒泡排序
假设有这个无序数组: ```[2,5,4,3,8,1,6,9,7,0]```, 要从小到大排列
第一轮交换, 比较```2```和```5```, 满足条件, 然后```5```和```4```, 不满足, 交换, 然后第三位```5```和第四位```3```比较, 不满足, 交换. 最终最大的数字会放在数组末尾
第二轮交换同理, 将第二大的数字放到倒数第二位.

结论: 总共进行```length - 1```轮外层循环, ```length```是数组长度.
```js
var arr = [2,5,4,3,8,1,6,9,7,0];

for(var i = arr.length - 1, j, tmp; i >= 1; i--) {	//外层循环只需要执行arr.length - 1次. 两个元素只需交换1次, 3个元素只需交换2次
	for(j = 0; j < i; j++) {
		if( arr[j] > arr[j+1] ) {
			tmp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = tmp;
		}
	}
}
```


### 选择排序
每次选中最大的数, 存放其索引在```index```中, 然后放在最后
```js
var arr = [2,5,4,3,8,1,6,9,7,0];

var index, value, i, j;
for(i = arr.length - 1; i >= 1; i--) {
	index = 0, value = arr[0];		// 每次必须更新最大数最第一个元素, 然后一步步刷新
	for(j = 1; j <= i; j++) {
		if(arr[j] > value) {
			index = j;
			value = arr[j];
		}
	}
	arr[index] = arr[i];
	arr[i] = value;
}
```

### 快速排序
选择一个元素作为基准值, 从数组两边查找, 左边查找到大于基准值则停止, 右边查找到小于基准值则停止, 然后将查找到的值交换, 重复此步骤, 交换基准值.
继续上面的步骤, 递归执行.

```js
var arr = [2,5,4,3,8,1,6,9,7,0];

function quickSort(arr) {
	sort(arr, 0, arr.length - 1);
	return arr;
}

function sort(arr, left, right) {
	var i = left, j = right, base = arr[left], tmp;

	while(i < j) {
		while( arr[j] >= base && i < j ) j--;		// 基准值选择左边的则必须先从右边查找
		while( arr[i] <= base && i < j ) i++;
		
		tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	arr[left] = arr[i];
	arr[i] = base;

	if(left < i - 1) arguments.callee(arr, left, i - 1);
	if(right > i + 1) arguments.callee(arr, i + 1, right);
}

quickSort(arr);

```



























