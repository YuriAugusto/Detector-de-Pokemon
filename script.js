function btnEscolher(){
    var pokemon = window.document.getElementById('ftext') //ftxt == valortxt
    var fsex = window.document.getElementsByName('radsex')//rsex == valor do radio
    var res = window.document.getElementById('resposta')//associação com a segunda div através do id 'res'
    var imagem = window.document.getElementById('imagem')//associação com img
    var genero = ''
    imagem.setAttribute('id','imagem')
    if (pokemon.value < 1 || pokemon.value > 3){
        alert('Por favor, digite um valor entre 1, 2 ou 3.')
        
    }else if (fsex[0].checked){
        genero = "Macho"
        if (pokemon.value == 1){
            //alert('buff1')
            imagem.src = "buff1.png"            
            document.body.style.background = "#4366ff5b" //muda a cor do background
        } else if(pokemon.value == 2){
            //alert('cleffa2')
            imagem.src = "cleffa2.png"
            document.body.style.background = '#224bff5b' //muda a cor do background
        }else {
            //alert('pichu3')
            imagem.src = "pichu3.png"
            document.body.style.background = '#012fff5b' //muda a cor do background
        }
    }
    else {
        if (fsex[1].checked){
            genero = "Fêmea"
            
            if(pokemon.value ==1){
                imagem.src = "buff2.png"
                document.body.style.background = '#ff77ed5b' //muda a cor do background
            }else if (pokemon.value ==2){
                imagem.src = "cleffa3.png"
                document.body.style.background = '#ff0ddf3d' //muda a cor do background
            }else {
                imagem.src = "pichu1.png"
                document.body.style.background = '#ff00dd4d' //muda a cor do background
            }
        } 

    }
    
    res.innerHTML = `Detectamos que o pokemon é ${genero}.`
    res.style.textAlign = "center"
}