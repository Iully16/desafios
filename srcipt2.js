function bissexto(){
    
    var x;

    var anos=prompt("Digite o ano:") 

    if (anos % 400 == 0 || ( anos % 4 == 0 && anos % 100 != 0) ){
        x = anos + "--" + "É um ano Bissexto!";
        document.getElementById("demo").innerHTML=x
    } else {
        x= anos + "--" + "NÃO é um ano Bissexto!";
        document.getElementById("demo").innerHTML=x
    }

}