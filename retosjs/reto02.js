/*
Por cada día de vacaciones (Si el día es Lun-Vier) sumaremos 2 horas.

El año puede ser un año bisiesto. Haga los controles que necesita, si es necesario.
Aunque las vacaciones son el 31 de diciembre, las horas adicionales se realizarán el mismo año.
Date.getDay()El método devuelve el día de la semana de una fecha. 0 es domingo, 1 es lunes, etc.

*/

function countHours(year, holidays) {
	let horas = 0; //Inicializamos las horas
	
	//Recorremos las vacaciones
	holidays.map((item) => {
		//Fecha tiene el formato MM/DD, lo convertimos a una fecha válida del mismo año y con getDay obtenemos el día de la semana
		let fechaD = new Date(item+"/"+year).getDay();

		//Si el año es bisiesto
		if (year%2==0) {
			//Si no es sábado o domingo
			if (![6,0].includes(fechaD)) {
				horas+=2; //Sumamos 2 horas
			}
		} else {
			//Si no es sábado o domingo
			if (![1,0].includes(fechaD)) {
				horas+=2; //Sumamos 2 horas
			}
		}
	})
	return horas;
}

const year = 2000;
const holidays = ["01/01", "01/02"]; // format MM/DD

console.log(countHours(year, holidays));
