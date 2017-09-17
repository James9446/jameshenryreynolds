var c = document.getElementById("c");
var ctx = c.getContext("2d");

var W = window.innerWidth,
    H = window.innerHeight;

var SZ = 12;
var pos = [];
var charsets = [
  "abcdefghijklmnopqrstuvwxyz",
  "XO"
];
var charset = charsets[1].split("");

c.width = W; c.height = H;
W -= W % SZ; H -= H % SZ;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, W, H);

for(var i = 0; i < W/SZ; i++){
  pos[i] = Math.random()*H;
  pos[i] -= pos[i] % SZ;
}

var draw = setInterval(function(){
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, W, H);
  
  ctx.font = SZ+"px monospace";
  ctx.fillStyle = "lime";
  ctx.textAlign = "start";
  
  for(var i = 0; i < W/SZ; i++){
    pos[i] += SZ;
    if(pos[i] == H) pos[i] = 0;
    ctx.fillText(charset[Math.floor(Math.random()*charset.length)], i*SZ, pos[i]);
  }
}, 50);