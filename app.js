
export function notas(nota)		{
	
			if (nota < 3) {
				return("Muy deficiente");
			}
			else if (nota < 5) {
				return("Insuficiete");
			}
			else if (nota < 6) {
				return("Suficiente");
			}
			else if (nota < 7) {
				return("Bien");
			}
			else if (nota < 9) {
				return("Notable"); 5
			}
			else if (nota <= 10) {
				return("Sobresaliente");
			}
			
			else{
			 	return("Nota erronea");
			}
	
}