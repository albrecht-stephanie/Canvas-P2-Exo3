var c = document.getElementById("ptitbiscuit");
var ctx = c.getContext("2d");
function draw(){
//la tête
ctx.fillStyle = '#976F0F';
ctx.beginPath();
ctx.arc(100, 150, 50, 0, Math.PI*2, false);
ctx.fill();
//les yeux
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(80, 130, 7, 0, Math.PI*2, false);
ctx.fill();
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(120, 130, 7, 0, Math.PI*2, false);
ctx.fill();
//la bouche
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.arc(102,165,15,0,Math.PI,false);
ctx.stroke();
//les surcils
ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.arc(80, 125, 10, 0, Math.PI,true);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.arc(120, 125, 10, 0, Math.PI,true);
ctx.stroke();
//le nez
ctx.fillStyle = '#FEC5CE';
ctx.beginPath();
ctx.arc(100, 150, 7, 0, Math.PI*2, false);
ctx.fill();
//le corps
ctx.fillStyle= '#976F0F';
ctx.fillRect(70, 220, 60, 120);
//les bras
ctx.strokeStyle = '#976F0F';
ctx.beginPath(); 
ctx.moveTo(20, 205);
ctx.lineTo(180, 205);
ctx.lineWidth = 30;
ctx.lineCap = "round";
ctx.fill();
ctx.stroke();
//les entre-jambes
ctx.strokeStyle = 'white';
ctx.beginPath(); 
ctx.moveTo(100, 350);
ctx.lineTo(100, 300);
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.fill();
ctx.stroke();
//les pieds arrondis
ctx.strokeStyle = '#976F0F';
ctx.beginPath(); 
ctx.moveTo(82, 334);
ctx.lineTo(82, 300);
ctx.lineWidth = 26;
ctx.lineCap = "round";
ctx.stroke();
ctx.strokeStyle = '#976F0F';
ctx.beginPath(); 
ctx.moveTo(118, 334);
ctx.lineTo(118, 300);
ctx.lineWidth = 26;
ctx.lineCap = "round";
ctx.stroke();
//les boutons
ctx.fillStyle = '#7A2976';
ctx.beginPath();
ctx.arc(100, 230, 7, 0, Math.PI*2, false);
ctx.fill();
ctx.fillStyle = '#7A2976';
ctx.beginPath();
ctx.arc(100, 260, 7, 0, Math.PI*2, false);
ctx.fill();
};

