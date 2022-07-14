var body = $response.body;

console.log('body-----'+body)
function re(reg, str) {
    body = body.replace(reg, str);
}

var reg1 = /true/g;
re(reg1, 'false');
console.log('处理后body---'+body);
$done(body);
