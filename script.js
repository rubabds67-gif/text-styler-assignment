let text = document.getElementById("mainText");
let box = document.getElementById("textBox");
let size = 20;
let isBold = false;
let isItalic = false;
let isDark = false;

let original = {
text: text.innerText,
size: 20,
color: "black",
family: "Arial",
bg: "white"
};

function changeColor(c){ text.style.color = c; }
function changeSize(type){
if(type=='increase') size+=2;
else size-=2;
if(size<10) size=10;
if(size>50) size=50;
text.style.fontSize = size+"px";
}
function changeFamily(f){ text.style.fontFamily = f; }
function decoration(d){
if(d=='none') text.style.textDecoration="none";
else text.style.textDecoration=d;
}
function toggleBold(){
isBold = !isBold;
text.style.fontWeight = isBold ? "bold" : "normal";
}
function toggleItalic(){
isItalic = !isItalic;
text.style.fontStyle = isItalic ? "italic" : "normal";
}
function align(a){ text.style.textAlign = a; }
function transform(t){ text.style.textTransform = t; }
function bgColor(c){ box.style.backgroundColor = c; }
function toggleMode(){
isDark = !isDark;
document.body.classList.toggle("dark");
document.getElementById("modeBtn").innerText = isDark ? "Light Mode" : "Dark Mode";
}
function resetAll(){
text.innerText = original.text;
text.style = "";
box.style.backgroundColor = "white";
size = 20;
text.style.fontSize = "20px";
isBold=false; isItalic=false; isDark=false;
document.body.classList.remove("dark");
document.getElementById("modeBtn").innerText="Dark Mode";
}