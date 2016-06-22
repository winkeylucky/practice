


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
