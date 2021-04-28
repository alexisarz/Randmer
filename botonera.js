
//loteria backend//

for(var i=0; i<1;i++){

    random = Math.random()
    random *= 100
    random = parseInt(random)
    random++
    console.log(random)
    

    

    }

//loteria frontend//

var boton = document.getElementById("randombtn")
var randomNum = document.getElementById("randomNum")
boton.addEventListener("click", function(){
    randomNum.innerText = random
   
     
})




