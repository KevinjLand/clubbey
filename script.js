//to get the date with this document.write(Date());

var acElements = new Array();
var sClub;
var sManager;
var sMoreInfo;
var clubEl;
var managerEl;
var moreInfoEl;
var allClubFlex = document.getElementById("allClubs");

//extract info from forms and stores in array
function myFunction(){
  event.preventDefault();

  sClub = document.getElementById("clubForm").value;
  sManager = document.getElementById("managerForm").value;
  sMoreInfo = document.getElementById("moreInfoForm").value;

  acElements.push("1" + sClub);
  acElements.push("2" + sManager);
  acElements.push("3" + sMoreInfo);

  document.location.href="allClubs.html";
}

//Should create elements every time all clubs is loaded. May need server for this
window.addEventListener("load", function () {
  if(acElements.length > 0){
    clubEl = document.createElement('h1');
    managerEl = document.createElement('h1');
    moreInfoEl = document.createElement('h1');

    var textnodeClub = document.createTextNode(acElements[0]);
    var textnodeManager = document.createTextNode(acElements[1]);
    var textnodeMoreInfo = document.createTextNode(acElements[2]);

    clubEl.appendChild(textnodeClub);
    managerEl.appendChild(textnodeManager);
    moreInfoEl.appendChild(textnodeMoreInfo);
  
    allClubFlex.appendChild(clubEl);
    allClubFlex.appendChild(managerEl);
    allClubFlex.appendChild(moreInfoEl);
  }
});

//changes colors on the minNav
window.addEventListener("load", function () {
  if(document.getElementById("cal")!=null){
    document.getElementById("calButton").style.backgroundColor = "white"; 
    document.getElementById("mainButton").style.backgroundColor = "#0b4f6c"; 
    document.getElementById("announceButton").style.backgroundColor = "#0b4f6c"; 
    document.getElementById("calButton").style.color = "#0b4f6c"; 
    document.getElementById("mainButton").style.color = "white"; 
    document.getElementById("announceButton").style.color = "white";
  }
  else if(document.getElementById("feed")!=null){
    document.getElementById("calButton").style.backgroundColor = "#0b4f6c"; 
    document.getElementById("mainButton").style.backgroundColor = "white"; 
    document.getElementById("announceButton").style.backgroundColor = "#0b4f6c";
    document.getElementById("calButton").style.color = "white"; 
    document.getElementById("mainButton").style.color = "#0b4f6c"; 
    document.getElementById("announceButton").style.color = "white";
  }
  else if(document.getElementById("announce")!=null){
    document.getElementById("calButton").style.backgroundColor = "#0b4f6c"; 
    document.getElementById("mainButton").style.backgroundColor = "#0b4f6c"; 
    document.getElementById("announceButton").style.backgroundColor = "white";
    document.getElementById("calButton").style.color = "white"; 
    document.getElementById("mainButton").style.color = "white"; 
    document.getElementById("announceButton").style.color = "#0b4f6c";
  }
});

//changes the calander
var time = Date();
var month = getMonth(time);
var year =  time.substring(11,15);
var calTitle = document.getElementById("calTitle");

window.addEventListener("load", function () {
  try{
    calTitle.textContent = month + " " + year; 
  }
  catch(e){}
  
});

function getMonth(x){
  x = x.substring(4,7);
  if(x=='Jan'){
    x = 'January';
  }
  else if(x=='Feb'){
    x = 'Febuary';
  }
  else if(x=='Mar'){
    x = 'March';
  }
  else if(x=='Apr'){
    x = 'April';
  }
  else if(x=='May'){
    x = 'May';
  }
  else if(x=='Jun'){
    x = 'June';
  }
  else if(x=='Jul'){
    x = 'July';
  }
  else if(x=='Aug'){
    x = 'August';
  }
  else if(x=='Sep'){
    x = 'September';
  }
  else if(x=='Oct'){
    x = 'October';
  }
  else if(x=='Nov'){
    x = 'November';
  }
  else if(x=='Dec'){
    x = 'December';
  }
  return x;
}

//buttons on the calander
var curMonth = numByMonth(time);
var curYear = parseInt(time.substring(11,15));

function past(){
  if(curMonth%12==1){
    curYear--;
  }
  curMonth--;
  calTitle.textContent = monthByNum(curMonth) + " " + curYear;
  styleCalTitle(calTitle);
}

function future(){
  if(curMonth%12==0){
    curYear++;
  }
  curMonth++;
  calTitle.textContent = monthByNum(curMonth) + " " + curYear;
  styleCalTitle(calTitle);
}

function styleCalTitle(x){
 document.getElementById(x).style.padding-right = 0;
}

function monthByNum(x){
  if(x>12){
    x = x%12;
    if(x==0){
      x = 'December';
    }
  }
  else if(x<1){
    x = (x+12)%12; 
    if(x==0){
      x = 'December';
    }
    else{
      x = (x+12)%12;
    }
  }

  if(x==1){
    x = 'January';
  }
  else if(x==2){
    x = 'Febuary';
  }
  else if(x==3){
    x = 'March';
  }
  else if(x==4){
    x = 'April';
  }
  else if(x==5){
    x = 'May';
  }
  else if(x==6){
    x = 'June';
  }
  else if(x==7){
    x = 'July';
  }
  else if(x==8){
    x = 'August';
  }
  else if(x==9){
    x = 'September';
  }
  else if(x==10){
    x = 'October';
  }
  else if(x==11){
    x = 'November';
  }
  else if(x==12){
    x = 'December';
  }
  return x;
}

function numByMonth(x){
  x = x.substring(4,7);
  if(x=='Jan'){
    x = 1;
  }
  else if(x=='Feb'){
    x = 2;
  }
  else if(x=='Mar'){
    x = 3;
  }
  else if(x=='Apr'){
    x = 4;
  }
  else if(x=='May'){
    x = 5;
  }
  else if(x=='Jun'){
    x = 6;
  }
  else if(x=='Jul'){
    x = 7;
  }
  else if(x=='Aug'){
    x = 8;
  }
  else if(x=='Sep'){
    x = 9;
  }
  else if(x=='Oct'){
    x = 10;
  }
  else if(x=='Nov'){
    x = 11;
  }
  else if(x=='Dec'){
    x = 12;
  }
  return x;
}