var opçUm = document.getElementById ("Pergunta1")
var opçDois = document.getElementById ("Pergunta2")
var opçTres = document.getElementById ("Pergunta3")
var InputResult = 0;

function Resultado(){

    if (Number(opçUm.value == 1 )|| Number( opçDois.value == 1) || Number(opçTres.value == 1)){

        InputResult = (Number(opçUm.value) + Number(opçDois.value) + Number(opçTres.value));
        document.getElementById ("pontos").value = InputResult;
    
        if(InputResult == 3){
    
            alert("Você acertou tudo, parabéns!")
    
        }else{
    
            alert("Tente outra vez :/")
    
        } 
    
    
    
    
    }

    }
