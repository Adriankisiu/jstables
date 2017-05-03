var tables = ['Basia', 'Beata', 'Balbina'];
var tables1 = ['Heniek', 'Genek', 'Piotrek'];
var connect = tables.concat(tables1);

var newName = 'Tomek';
	if (connect.indexOf(newName) === -1) {
		var addName = connect.push(newName)
}

console.log(connect);
