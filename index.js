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
        resultado.textContent = parseInt(resultado.textContent) + 1;
    }
    turno.onclick = function(e){
        resultado.textContent = parseInt(resultado.textContent) + 2;
    }
    menos.onclick = function(e){
        resultado.textContent = parseInt(resultado.textContent) - 1;
    }
}
