function checks(num) {
	var date = new Date().toLocaleString();
	if(typeof num === "number"){
		return date;
    }else {
		return `�������� ��� ������ ${typeof num}`
    }
}

console.log(checks(5));
console.log(checks('������'));