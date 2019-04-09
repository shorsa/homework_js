var tags = ['section','h1','nav','div'];
var classes = ['cl_section','cl_h1','cl_nav','cl_div','cl_last'];
var heade_style = document.head.appendChild(document.createElement('style'));

for(var i in tags){
		var elem = document.body.appendChild(document.createElement(`${tags[i]}`))
		elem.className = classes[i];
		heade_style.append(`.${classes[i]} { background-color: green; height:30px;}`)
    }