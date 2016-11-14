var customPow = function() {
var a=prompt("Введите число:");
var b=prompt("Укажите степень:");

	var result = a;

	for (var i=1; i<b; i++) {
		result=result*a;
	}

	alert(result);
};
var autorization = function(){
	var names = [];
	var userName;

	for (var i=0; i<5; i++) {
		names[i] = prompt("Введите имя " + (i+1) + " для заполнения данными");
	}

	userName = prompt("Введите ваше имя:");
	var autorized='not';

	for (var v=0; v<names.length; v++) {
		if (userName==names[v]) {
			autorized=userName
		}
	}

	if (autorized=='not') {
		alert("error")
	}

	else {
		alert(autorized + " Вы успешно вошли")
	}
};
customPow();
autorization();

