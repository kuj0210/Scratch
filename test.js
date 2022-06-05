
//전역변수, 상수관리
var randMax = 10;
var QMax = 5;
var point = 100 / QMax;



//함수부

function getRandNum(tnum, max) {
    for (var i = 0; i <= max; i++) {
        flag = Math.floor(Math.random() * (randMax)); //부호결정자
        tnum[i] = Math.floor(Math.random() * (randMax)) + 1 //수의 절댓값 
        if (flag % 2 == 0) {
            tnum[i] *= -1;
        }//짝수-> 음수로 결정
    }

}

function makeQList(qstr, tnum, max) {
    var temp1, temp2; // +부호 생성을 위한 임시 변수
    var j = 1;

    for (var i = 0; i < max; i += 2) {
        if (tnum[i] > 0) { temp1 = "+" + tnum[i]; } else { temp1 = tnum[i]; }//부호붙이기
        if (tnum[i + 1] > 0) { temp2 = "+" + tnum[i + 1]; } else { temp2 = tnum[i + 1]; }//부호붙이기         
        qstr[j - 1] = "<문제" + (j) + "> ( " + temp1 + " ) " + "+" + " ( " + temp2 + " ) = " + "<br/>"
        j++;
    }
}

function makeAList(tans, tnum, max) {
    var j = 0;
    for (var i = 0; i < max; i += 2) {
        tans[j] = tnum[i] + tnum[i + 1]//정답생성
        j++;
    }
}
function printQandFBox(inputList, str, max) {
    var id
    document.write("<form id=\'QNAFORM\' method=\'get\'>");
    for (var i = 0; i < max; i++) {
        id = "pw" + i;
        console.log("<input type=\'text\'  id = " + id + "  name = ans" + i + " > <br/> <br/>");
        document.write("<font size=\"4rem\" color=\"black\">" + str[i] + "</font> ");
        document.write("<input type=\'text\'  id = " + id + "  name = ans" + i + " > <br/> <br/>");
    }
    document.write("</form>");
    document.write("<br/>");

}
function removeALL(formList, sbtn) {
    for (var i = 0; i < QMax; i++) {
        //document.body.removeChild(formList[i]);
    }
    document.body.removeChild(sbtn);
}

//html추가, 작성부
var tsum = 0 //점수
var aList = new Array();//학생답변

var tnum = new Array();    //문제출제용 배열
new getRandNum(tnum, randMax); //10개의 랜덤수배열
//document.write(tnum[0]+"<br/>");

var str = new Array(); //문제문장
new makeQList(str, tnum, randMax)//문제출제

var tans = new Array(); //답생성용 배열
new makeAList(tans, tnum, randMax)//답생성



var inputList = new Array();//입력창 배열
new printQandFBox(inputList, str, QMax);//in html, 입력창생성


//버튼생성
var sbtn = document.createElement('button');
var btnText = document.createTextNode('제출하기');
sbtn.appendChild(btnText);
document.body.appendChild(sbtn);
document.write("<br/><br/>");


function btnL() {
    //console.log("버튼클릭이벤트발생");
    for (i = 0; i < QMax; i++) {//getitem
        aList[i] = null;
        console.log("pw" + i);
        console.log(aList[i]);
        aList[i] = parseInt(document.getElementById("pw"+i).value);
        if (aList[i] == null) { console.log("읽기실패" + i); }
        console.log("res ans" + i);
        console.log(aList[i]);

        document.write((i + 1) + "번 답:" + aList[i]);
        if (aList[i] == tans[i]) {
            document.write("   정답O<br/>");
            tsum += point;
        }
        else { document.write("   오답X →  답:" + tans[i] + "<br/>"); }
    }
    document.write("종합점수: " + tsum + "<br/>");

    tsum = 0;
    new removeALL(aList, sbtn);
}

//리스너등록
sbtn.addEventListener("click", btnL);
