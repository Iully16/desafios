let btn = document.getElementById("btn")
text= document.getElementById("text")

btn.addEventListener ('click',function(){
    let preco = prompt("Qual era o preço anterior do seu produto?")
    let precoatual = prompt("Qual é o preço atual do seu produto?") 

    preco = parseFloat(preco)
    precoatual = parseFloat(precoatual)
    let val=0
    text.innerHTML= `<h3> Analisando os valores informados</h3>`

    if(precoatual > preco){
        text.innerHTML+= `<p> O produto custava R$ ${preco} e agora está custando R$ ${precoatu}.<br>
        Hoje o produto está mais caro.<br>
        O preço subiu R$ ${precoatual-preco} em relação ao preço anterior.
       </p>`
    } else if(precoatual < preco){
        val=preco - precoatual
        text.innerHTML+= `<p> O produto custava R$ ${preco} e agora está custando R$ ${precoatual}.<br>
        Hoje o produto está mais barato.<br>
        O preço caiu R$ ${val} em relação ao preço anterior.
       </p>`
    }
})