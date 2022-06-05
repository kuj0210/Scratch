

Q= new Array();
for(var i=0 ; i<5; i++){
    var key ="l"+(i+1).toString(); 
    Q[i] = document.getElementById(key);
    Q[i].innerText= "min"+i.toString();
}
