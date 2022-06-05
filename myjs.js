

L= new Array();
for(var i=0 ; i<5; i++){
    var key ="l"+(i+1).toString(); 
    L[i] = document.getElementById(key);
    L[i].innerText= "min"+i.toString();
}
