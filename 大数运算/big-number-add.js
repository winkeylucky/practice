

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