var str="";
var MenuA=["비전소개", "온라인강좌", "컨설팅소개", "커뮤니티",
    "나의강의실", "학습평가", "찾아보기"] //배열
    
var goods = {
    "pro": ["전자제품", "냉장고", "세탁기", "핸드폰",
    "에어워시", "컴퓨터", "청소기", "노트북",
    "선풍기", "USB"], 
    "name":"아이언맨"
    } 
    //Json 형태의 배열 
    //"key" : ["value", "value"]
var quick = {
    "sticky": ["장바구니", "마이페이지", "찾아보기", "최근 본 상품", "히스토리"]
    }


window.onload = function() {
    str+="<div onclick='func(1)'>2021 새해 프로젝트</div>";
    str+="<div>2021년 1월 4일</div>";
    str+="<div>";
    str+="  <ul>";
    str+="      <li onclick='func(2)'>로그인</li>";
    str+="      <li onclick='func(3)'>장바구니</li>";
    str+="      <li onclick='func(4)'>고객센터</li>";
    str+="  </ul>";
    str+="<div>";
header.innerHTML=str;

str="";
str+="<ul>";
for(i=0; i<7; i++)
    str+="<li id='menu" + i + "'>" +MenuA[i]+" </li>"
    //메뉴에 i갯수, MenuA 의 i번째를 넣어라 
str+="</ul>";
nav.innerHTML=str;

//article 1 
str="";
for(i=0; i<5; i++)
    str+="<div class='at1_box1_img"+i+"'></div>";
    //at1_box1에 이미지를 넣겠다, i번만큼 반복해서 넣겠다.
    //div는 css에서 크기를 정해줌
var at1_box1=document.querySelector(".at1_box1");
    //class를 불러옴
    at1_box1.innerHTML=str;

  for(i=0; i<5; i++)
  {
    this["at1_box1_img"+i]=document.querySelector(".at1_box1_img"+i);
    this["at1_box1_img"+i].style.background="url(imgs/img"+i+".jpg)";
    this["at1_box1_img"+i].style.backgroundSize="100% 100%";
    this["at1_box1_img"+i].style.cursor="pointer";
  }

//article 3 
var at3_pic=document.getElementById("at3_pic").getElementsByTagName("li");
for(i=0; i<5; i++) {
    at3_pic[i].style.background="url(./img/img"+i+".jpg)";
    at3_pic[i].style.backgroundSize="100% 100%";
    }

    // article4 상품 정보 
    var sang=document.getElementById("sang").getElementsByTagName("li");
    for(i=0; i<10; i++) 
        {
        sang[i].innerHTML=goods.pro[i];
        //sang의 [i]번째에 있는 문서에 goods의 pro의 [i]번째를 넣어라. 
        }
    admin.innerHTML="담당자 : " + goods.name;
    
    //옆에 떠 있는 상자 
    var stick = document.getElementById("at4_sticky").getElementsByTagName("li");
    for(i=0; i<5; i++) {
        stick[i].innerHTML=quick.sticky[i];
        //stick이라는 li의 [i]번째 = quick이라는 배열의 sticky라는 key의 [i]번째 배열을 갖는다
    }


} //window onload 



//일반구매, 정기배송 클릭시 색상 바꾸기 
cart_tab_one.onclick=function() {
    //alert('dd');
    cart_tab_one.style.background="#8ba3d8";
    cart_tab_two.style.bakcground="#f5f5f5";
    at3_basic.style.display="none";
    tab_one.style.display="block";
    tab_two.style.display="none";

    cart_tab_one.style.border="1px solid blue";
    cart_tab_one.style.borderBottom="none";
    cart_tab_two.style.border="1px solid #ccc";
}

cart_tab_two.onclick=function() {
    //alert('te');
    cart_tab_two.style.bakcground="#8ba3d8";
    cart_tab_one.style.background="#f5f5f5";
    at3_basic.style.display="none";
    tab_one.style.display="none";
    tab_two.style.display="block";

    cart_tab_two.style.border="1px solid blue";
    cart_tab_two.style.borderBottom="none";
    cart_tab_one.style.border="1px solid #ccc";
}



function func(js) {
    //function 함수이름 (전달인수) { alert(전달인수) }
    //alert('dkssyd');
    for(i=1; i<=7; i++) {
        this["at"+i]=document.querySelector(".at"+i);
        this["at"+i].style.display="none";
        //대괄호를 포괄해서 말하는 지시대명사 this
    }
    // at1.style.display="none";
    // at2.style.display="none";
    // at3.style.display="none";
    // at4.style.display="none";
    // at5.style.display="none";
    // at6.style.display="none";
    // at7.style.display="none";
    //ID가 아니라 class여서 위의 for문으로 변경 

    this["at"+js].style.display="block";
    //func(숫자)가 있는 객체를  누르면 해당 article에 해당하는 요소만 나타난다.

}

