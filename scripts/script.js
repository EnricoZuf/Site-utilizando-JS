function horaatual(){
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `São ${hora} horas`
    if(hora >0 && hora <=12){
        imagem.src='manha.webp'
        document.body.style.background ="#e7e45e"
    }
    else if (hora > 12 && hora <= 18){
        imagem.src = 'tarde.webp'
        document.body.style.background ="#3ea4be"
    }
    else {
        imagem.src ='noite.webp'
        document.body.style.background ="#150936"
    }
}

