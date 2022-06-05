

L= new Array();
L[0] = document.getElementById("l1");
L[1] = document.getElementById("l2");
L[2] = document.getElementById("l3");
L[3] = document.getElementById("l4");
L[4] = document.getElementById("l5");

for(var i=0 ; i<5; i++){
    var key ="l"+(i+1).toString(); 
    L[i] = document.getElementById(key);
    L[i].innerText= "min"+i.toString();
}
