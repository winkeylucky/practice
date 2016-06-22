

function add(a, b) {
	a = String(a).split('');
	b = String(b).split('');

	var i = Math.max(a.length, b.length), de = 0, tmp, res = [];

	while( i-- ) {
		tmp = +(a.pop() || 0) + +(b.pop() || 0) + de;
		res.unshift( tmp%10 );
		de = tmp >= 10 ? 1 : 0;
	}
	if(de) res.unshift(de);

	return res.join('');
}

