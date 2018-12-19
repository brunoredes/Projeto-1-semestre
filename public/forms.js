
    function formatar(mascara, documento){
      var i = documento.value.length;
      var saida = mascara.substring(0,1);
      var texto = mascara.substring(i)
      
      if (texto.substring(0,1) != saida){
                documento.value += texto.substring(0,1);
      }
      
    }
    
    function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    var cpf = strCPF.replace(/[^\d]+/g,'');

    Soma = 0;
    if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333"
    || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" 
    || cpf == "88888888888" || cpf == "99999999999") return false;
     
    for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;
   
    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;

  }

function validatePassword(pass, confirmpass){
  if(pass != confirmpass) {
    return false;
  } else {
    return true;
  }
}
