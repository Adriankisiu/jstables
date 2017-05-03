// plik scripts.js

var tablica = ['Basia', 'Beata', 'Balbina'];
var tablica1 = ['Heniek', 'Genek', 'Piotrek'];
var connect = tablica.concat(tablica1);

var newName = 'Tomek';
	if (connect.indexOf(newName) === -1) {
		var addName = connect.push(newName)
}

console.log(connect);
