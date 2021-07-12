export function IntegrarValor(valorEstruturado){
	var valorTexto = valorEstruturado["valor"].split('');
	
	for(var i = 0; i<valorTexto.length; i++){
		if(valorTexto[i] == "R" ){
			valorTexto.splice(i,1);
		}
		if(valorTexto[i] == "$")
		{
			valorTexto.splice(i,1);
		}
		if(valorTexto[i] == ",")
		{
			valorTexto.splice(i,1,".");
		}
	}
	valorTexto = parseFloat(valorTexto.join(""));
	return valorTexto;
}