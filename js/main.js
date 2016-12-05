var customPow = function() {
	var a=prompt("Введите число:");
	if (a!='' && a!=null) {
		var result=a;
		var b=prompt("Укажите степень:");
		if(b!=''&& b!=null){
			for (var i=1; i<b; i++) {
				result=result*a;
			};
			alert(result);
			}
			else {
				alert ("Вы ввели не правильное значение");
			};
		}
	else {
	alert ("Необходимо ввести правильное значение");
	};
};

var autorization = function() {
	var names = [];
	var userName;

	for (var i=0; i<5; i++) {
		names[i] = prompt("Введите имя " + (i+1) + " для заполнения данными");
		console.log(names[i]);
		if (names[i]==='' || names[i]===null) {
			alert ("Вы ввели не правильное значение, цикл прерван");
			break;}
		}

if (names.length>1) {
	userName = prompt("Введите ваше имя:");
	var autorized='not';

	if (userName!='' && userName!=null){
		for (var v=0; v<names.length; v++) {
			if (userName==names[v]) {
				autorized=userName
			}
		}
	}

		if (autorized=='not') {
			alert("Ошибка входа");
		}

		else {
			alert(autorized + " Вы успешно вошли")
		}
	}
	else {
			alert("Некорректный ввод параметров");
	}
};
customPow();
autorization();