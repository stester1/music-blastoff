function rocketCount() {    
    var paolo = 10;
    for (var i = 1; i <= 11; i++){
        if(i == 11){
            setTimeout(function(){

                document.getElementById("Declan").innerHTML = "BLASTOFF!!!";
            }, 1000 * i);
            } else if (i>6) {
                setTimeout(function() {
                    document.getElementById("Declan").innerHTML =
                    "Halfway There!, time left = " + paolo;
                    paolo = paolo - 1;
                }, 1000 * i);
            } else {
                setTimeout(function(){
                    document.getElementById("Declan").innerHTML = "the time left is " + paolo;
                    paolo = paolo - 1;
                }, 1000 * i);
            }
        }
}