num= "586723";
key = Array.from(num);
len = key.length;
opener = new Array();
var i =0;
var flag=0;

var j=0;
while(true){
    flag =  Math.floor(Math.random() * 6) ;
 if(opener.indexOf(flag)==-1)// 새로운 수라면
    {
        opener[i]=flag;//추가
        i++;
            
    }
    if(i>=3) break; //3개 생성했다면 out
}


for(i=0; i< len ; i++){
    if(opener.indexOf(i)==-1){
        //console.log("비공개");
        str = "( ? )"
        document.write(str);
    }
    else{
        //console.log("공개");
        str = "( "+key[i]+" )";
        document.write(str);

    }

}
    


 
    
