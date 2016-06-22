
// 操作cookie

function set(key, value, expires, domain, path) {
	if( expires ) expires = 'expires=' + new Date(Date.now() + expires*1000).toGMTString() + '; ';
	if( domain ) expires = 'domain=' + domain + '; ';
	if( path ) path = 'path=' + path + '; ';

	document.cookie = key + '=' + value + '; ' + (expires || '') + (domain || '') + (path || '');
}


function get(key) {
	var reg = new RegExp('(^|;\\s)'+ key +'=([^;]*)');
	return (document.cookie.match(reg) || [])[2] || '';
}


function del(key, domain, path) {
	if( domain ) expires = 'domain=' + domain + '; ';
	if( path ) path = 'path=' + path + '; ';

	document.cookie = key + '=; expires=Thu Jan 01 1970 08:00:00 GMT+0800 (CST); ' + (domain || '') + (path || '');
}

