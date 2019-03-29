var letters = [];
var str = "Backend As A Service";
for(var i = 0; i <= str.split(' ').length -1; i++){
	letters.push(str.split(' ')[i].slice(0,1));

}
console.log(letters);
console.log(letters.join(''));