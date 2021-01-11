function n1() {
	console.log("№1");
	console.log("Типы данных:");
	// string
	var title = "Dianxia";
	console.log(title);
	// number
	var age = 800;
	console.log(age);
	// boolean
	var bool = true;
	console.log(bool);
	// null
	var n = null;
	console.log(n);
	console.log("Преобразования:")
	console.log(title + age); // string + number = string
	console.log(title + bool); // string + boolean = string
	console.log(title + n); // string + null = string
	console.log(age + bool); // number + boolean = number
	console.log(bool + n); // boolean + null = number
}

function n2() {
	console.log("№2");
	var a = prompt("Введите первую сторону прямоугольника:");
	var b = prompt("Введите вторую сторону прямоугольника:");
	var perimetr = a * 2 + b * 2;
	console.log("Периметр прямоугольника:", perimetr);
	var ploshad = a * b
	console.log("Площадь прямоугольника:", ploshad);
	console.log("Отношение периметра к площади:", perimetr / ploshad);
}

function n3() {
	console.log("№3");
	var cels = prompt("Введите температуру в градусах Цельсия:");
	var far = Number(cels) * 1.8 + 32;
	console.log(cels, "\u00B0C соответствует", far, '\u00B0F');

	far = prompt("Введите температуру в градусах Фаренгейта:");
	cels = (Number(far) - 32) / 1.8;
	console.log(far,'\u00B0F соответствует', cels,'\u00B0C');
}

function n4() {
	console.log("№4");
	var year = prompt("Введите год:");
	var k = false;
	k = (year % 4) == 0 ? (k = true) :
		(year % 100) == 0 ? (k = true) : (k = false);
	if (k == true) {
		console.log(year, "високосный год");
	} else {
		console.log(year, "невисокосный год");
	}
}

function n5() {
	console.log("№5");
	var a = Number(prompt("Введите первое число:"));
	var b = Number(prompt("Введите второе число:"));
	var bool;
	if (a == 10 || b == 10 || a + b == 10) {
		bool = true;
	} else {
		bool = false;
	}
	console.log(bool);
}