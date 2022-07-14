var body = $response.body;

console.log('body---'+body)
function re(reg, str) {
    body = body.replace(reg, str);
}

var reg1 = /ipsubexp=/g;
var reg2 = /ipsub=\d/g;
re(reg1, 'ipsubexp=1646033923');
re(reg2, 'ipsub=1');
$done(body);
