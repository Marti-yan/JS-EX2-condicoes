function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById("nasc").value
    var res = document.getElementById("res")
    var img = document.getElementById("imagem")
    img.src = "img/inter"
    var sexo = document.querySelector('input[name="radsex"]:checked').value
    var resultado = document.getElementById("resultado")
    var idade = ano - nasc
    res.style.display = "block"

    if (ano < nasc || nasc < 1900) {
        alert("Confira os dados e tente novamente!")
    } else {
        switch (sexo) {
            case "feminino":
                if (idade > 12 && idade < 18) {
                    resultado.innerHTML = `Mulher jovem de ${idade} anos`
                    img.src = "img/jovem-mulher.jpg"
                } else if (idade < 12) {
                    resultado.innerHTML = `Mulher Criança de ${idade} anos`
                    img.src = "img/crianca-mulher.jpg"
                } else if (idade >= 50) {
                    resultado.innerHTML = `Mulher idosa de ${idade} anos`
                    img.src = "img/idoso-mulher.jpg"
                } else {
                    resultado.innerHTML = `Mulher adulta de ${idade} anos`
                    img.src = "img/adulto-mulher.jpg"
                }
                break;

            case "masculino":
                if (idade > 12 && idade < 18) {
                    resultado.innerHTML = `Homem jovem de ${idade} anos`
                    img.src = "img/jovem-homem.jpg"
                } else if (idade < 12) {
                    resultado.innerHTML = `Homem criança de ${idade} anos`
                    img.src = "img/crianca-homem.jpg"
                } else if (idade >= 50) {
                    resultado.innerHTML = `Homem idoso de ${idade} anos`
                    img.src = "img/idoso-homem.jpg"
                } else {
                    resultado.innerHTML = `Homem adulto de ${idade} anos`
                    img.src = "img/adulto-homem.jpg"
                }
                break;
        }
    }
}




