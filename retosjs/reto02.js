/*
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year


El año puede ser un año bisiesto. Haga los controles que necesita, si es necesario.
Aunque las vacaciones son el 31 de diciembre, las horas adicionales se realizarán el mismo año.
Date.getDay()El método devuelve el día de la semana de una fecha. 0 es domingo, 1 es lunes, etc.

*/

/*
function countHours(year, holidays) {
	let horas = 0; //Inicializamos las horas

	//Recorremos el array de vacaciones
	for (const key in holidays) {
		//Transformamos el array de vacaciones a fechas válidas de ese mismo año
		let fecha = new Date(Date.parse(holidays[key] + "/" + year));

        //Si el año es bisiesto
		if (fecha % 2 == 0) {
            //Al ser año bisiesto el 6 coincide con sábado y el 0 con domingo
			if (fecha.getDay() != 6 && fecha.getDay() != 0) {
				horas += 2;//Añadiremos 2 horas
			}
		} else {
			//Al ser año bisiesto el 0 coincide con sábado y el 1 con domingo
			if (fecha.getDay() != 0 && fecha.getDay() != 1) {
				horas += 2;//Añadiremos 2 horas
			}
		}
	}
	//Devolvemos el total de horas extras
	return horas;
}
*/

function countHours(year, holidays) {
	let dias = 0;
	holidays.map((item) => {
		let fechaD = new Date(item+"/"+year).getDay();

		if (year%2==0) {
			if (![6,0].includes(fechaD)) {
				dias+=2;
			}
		} else {
			if (![1,0].includes(fechaD)) {
				dias+=2;
			}
		}
	})
	return dias;
}

const year = 2000;
const holidays = ["01/01", "01/02"]; // format MM/DD

console.log(countHours(year, holidays));
