
function makeNewRandNum(numList, num){
    if(numList==null){ console.error("makeNewRandNum에서 비어있는 매게변수를 받았습니다.");}
    for(var i=0; i<num; i++){
        var flag = Math.floor(Math.random() * 20);
        //console.log("플래그값:"+flag.toString());
        numList[i]= Math.floor(Math.random() * 20)+1;
        if(flag%2==1){
            //console.log(i.toString()+"번째에서 음수생성");
            numList[i]*=(-1);
        }
    }

}

function makeQuiz(randNumList, len ,quizStringList){
    var j=0;
    var temp1="";
    var temp2="";

    for (var i =0 ; i< len ; i+=2){
        if(randNumList[i]>0){ temp1="(+"+randNumList[i].toString()+")";}else{ temp1="("+randNumList[i].toString()+")";}
        if(randNumList[i+1]>0){ temp2="(+"+randNumList[i+1].toString()+")";}else{ temp2="("+randNumList[i+1].toString()+")";}

        quizStringList[j]= "Q "+temp1.toString() + " + "+temp2.toString()+"  = ?";
        j++
    }

}

myNum = new Array();
new makeNewRandNum(myNum,10);
/*
console.log("난수확인");
for(var i=0 ; i<10; i++)
    console.log(myNum[i]);
*/

quizStringList = new Array();
new makeQuiz(myNum,10, quizStringList);

/*
console.log("지문확인");
for(var i=0 ; i<5; i++)
    console.log(quizStringList[i]);
*/


Q= new Array();
for(var i=0 ; i<5; i++){
    var key ="l"+(i+1).toString(); 
    Q[i] = document.getElementById(key);
    Q[i].innerText= quizStringList[i];
}



var obj = document.createElement("input");
obj.type ="button";
obj.id ="mbtn";
obj.value="제출"
obj.onclick = function (){
    console.log("처리시작");
    var A=new Array();
    var temp;
    for(var i=0 ; i<5; i++){
        var key ="A"+(i+1).toString(); 
        temp= document.getElementById(key);
        A[i]=temp.value;
        console.log(A[i]);
        
    }
    console.log("처리끝");
    document.body.remove();
    document.write("점수");
    
};

var fm= document.getElementById("QNA");
fm.appendChild(obj);








