var Constr = function(){}
Constr.prototype.addProperty = function(name, val) {
	this[name] = val;
}

var sample = new Constr;
