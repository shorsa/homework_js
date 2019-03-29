function userInfo () {
	 return this.registered ? 
		`���� �����������:  ${this.data}` : 
			`�������������������� ������������: ${this.name}`;
}

var user1 = {
	name : 'Vasya',
	registered : true,
	data : new Date().toLocaleString(),
	getInfo : userInfo
};

var user2 = {
	name : 'Vasya',
	registered : false,
	data : new Date().toLocaleString(),
	getInfo : userInfo
};

console.log(user1.getInfo());
console.log(user2.getInfo());