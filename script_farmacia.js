function calculaPromo(){
    var medicamento = document.getElementById('medicamento').value
    var preco = parseFloat(document.getElementById('preco').value)
    var valor_da_promo = parseInt(preco*2)

    document.getElementById('resposta_medicamento').innerHTML = "Promoção de " + medicamento
    document.getElementById('resposta_promo').innerHTML = "Leve 2 por apenas R$: " + valor_da_promo
}







var verpromo = document.getElementById('mostrar_promo')
verpromo.addEventListener('click', calculaPromo)