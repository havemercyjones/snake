const c=document.getElementById('c'),x=c.getContext('2d');const N=20,S=20,T=120;
let snake=[{x:10,y:10}],dir={x:1,y:0},food=spawn(),dead=false;
addEventListener('keydown',e=>({ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[e.key]&&
  ([dir.x,dir.y]=({ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[e.key]))));
function spawn(){return {x:Math.floor(Math.random()*N),y:Math.floor(Math.random()*S)}}
function step(){
  if(dead) return; const h={x:(snake[0].x+dir.x+N)%N,y:(snake[0].y+dir.y+S)%S};
  if(snake.some(p=>p.x===h.x&&p.y===h.y)) return dead=true;
  snake.unshift(h); if(h.x===food.x&&h.y===food.y) food=spawn(); else snake.pop();
  x.clearRect(0,0,c.width,c.height); x.fillRect(food.x*20,food.y*20,20,20);
  snake.forEach(p=>x.fillRect(p.x*20,p.y*20,18,18)); setTimeout(step,T);
}
step();
