
// Захостить на гитхабе приложение, которое:
// читает куки на клиенте, и если там есть дата последнего посещения, выводит ее на страницу
// пишет в куки на клиенте текущую дату посещения

let practiceGetSet = {
	cookies : window.document.cookie,
	res : {},
	
	get getCookies(){
		this.cookies.split('; ').map(
			item => { return {[item.split('=')[0]] : item.split('=')[1]} }
		).forEach(
			item => Object.assign(this.res, item)
 		)
		if( 'date' in this.res){

		document.body.appendChild(document.createElement('div'))
			.textContent = JSON.stringify(this.res)
		} 
		this.addCookies = {date : new Date().toLocaleDateString() }

	},
	set addCookies(obj){
		let arrCoocie = Object.entries(obj)
		let arr =[];
		arrCoocie.forEach(item => arr.push(`${item[0]}=${item[1]}; `))
		document.cookie = arr.join('')
	}
}

document.cookie ? practiceGetSet.getCookies : practiceGetSet.addCookies = {date : new Date().toLocaleDateString() } ;
