function init(){
    //variables
    var resultado = document.getElementById("resultado");
    var mas = document.getElementById("mas");
    var menos = document.getElementById("menos");
    var turno = document.getElementById("turno");
    var reinicio = document.getElementById("reinicio"); 

    //eventos
    reinicio.onclick = function(e){
        resultado.textContent = 3;
    }
    mas.onclick = function(e){
        if (resultado.textContent < 10) {
            resultado.textContent = parseInt(resultado.textContent) + 1;
        }else{
            alert("¡Energía Máxima!");
        }
    }
    turno.onclick = function(e){
        resultado.textContent = parseInt(resultado.textContent) + 2;
    }
    menos.onclick = function(e){
        if (resultado.textContent > 0) {
            resultado.textContent = parseInt(resultado.textContent) - 1;
        }else{
            alert("¡No hay más energías!");
        }
    }
}
