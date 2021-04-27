var tela = 1;
var abc;
var a, xa, ya;
var e, xe, ye;
var i, xi, yi;
var o, xo, yo;
var u, xu, yu;
var alfinete, x, y;
var foto1;
var foto2;
var setas;

function preload() {
  abc = loadImage('assets/abc.png');
  a = loadImage('assets/alfabeto/a.jpg');
  e = loadImage('assets/alfabeto/e.jpg');
  i = loadImage('assets/alfabeto/i.jpg');
  o = loadImage('assets/alfabeto/o.jpg');
  u = loadImage('assets/alfabeto/u.jpg');
  alfinete = loadImage('assets/alfinete.png');
  foto1 = loadImage('assets/liohana.jpg');
  foto2 = loadImage('assets/natalia.jpg');
  setas = loadImage('assets/setas.png');
}

function setup() {
  createCanvas(400, 400);
  x = 150;
  y = 0;
  xa = 40;
  ya = 420;
  xe = 100;
  ye = 500;
  xi = 190;
  yi = 450;
  xo = 250;
  yo = 400;
  xu = 340;
  yu = 410;
  }

function draw() {
    
  menu();
  ins ();
  creditos();
  game();
}

function menu(){
  //tela do menu
  if(tela==1){
  background('#8A2BE2');
  textStyle(BOLDITALIC);
  textAlign(CENTER);
  textSize(40);
  stroke('#f15bb5');
  text("Menu", 200, 110)
  
  //Jogar 
  if(mouseX > 127 && mouseX < 127 + 150 && mouseY > 145 && mouseY < 145 + 50){
    stroke('#fee440');
    fill('#f15bb5');
    rect(127, 145,150, 50, 10);
    if(mouseIsPressed){
      tela = 2;
    }
  }
  
  fill('#fee440');
  noStroke();
  text("Jogar", 200, 180);
  
  //Instruções
  if(mouseX > 90 && mouseX < 90 + 220 && mouseY > 205 && mouseY < 205 + 50){
    stroke('#fee440');
    fill('#f15bb5');
    rect(90, 204,220, 50, 10);
    if(mouseIsPressed){
      tela = 3;
    }
  }
  
  fill('#fee440');
  noStroke();
  text("Instruções", 200, 240);
  
  //Créditos
  if(mouseX > 117 && mouseX < 117 + 170 && mouseY > 260 && mouseY < 260 + 50){
    stroke('#fee440');
    fill('#f15bb5');
    rect(117, 260,170, 50, 10);
    if(mouseIsPressed){
      tela = 4;
    }
  }
  
  fill('#fee440');
  noStroke();
  text("Créditos", 200, 300);
  
    image(abc, 0, 0)
  } 
}

function game(){
  
  //jogo em ação
  if(tela==2){
    background(255,255,255);
    imagem();
    moveAlfinete(); //chamando a função que eu criei
    moveBalões();
    
    triangle(10, 20, 30, 10, 30, 30);
    if(mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 10 + 30){
     if(mouseIsPressed) {
       tela = 1;
     }
    }
  }
}

function imagem(){
  image(a, xa, ya, 60, 100);
  image(e, xe, ye, 50, 100);
  image(i, xi, yi, 50, 100);
  image(o, xo, yo, 50, 100);
  image(u, xu, yu, 50, 100);
  image(alfinete, x, y, 100, 100);
}

function moveAlfinete(){
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
}

function moveBalões(){
  ya = ya - 1;
  ye = ye -0.5;
  yi = yi -0.6;
  yo = yo -0.8;
  yu = yu -0.5;
}

function ins(){
  //Instruções
  if(tela==3){
    background('#66CDAA');
    fill('#00008B');
    textStyle(BOLDITALIC)
    textSize(14);
    noStroke();
    textAlign(LEFT);
    text("   É inegável que o lúdico é de grande importância para os alunos da educação infantil e fundamental para despertar o interesse no processo de alfabetização. Tendo em vista esse fator o jogo terá como público alvo os alunos do 1º ano do ciclo básico na disciplina de Lingua Portuguesa e trabalhará a habilidade EF12LP01 (Ler palavras novas com precisão na decodificação, no caso de palavras de uso frequente, ler globalmente, por memorização), com a finalidade de estimular e ensinar os educandos a formação de palavras e a leitura. Iremos apresentar as vogais e consoantes, trabalharemos letras iniciais e finais das palavras e, ainda,o reconhecimento de palavras de uso comum."  , 40,30,320,400);
    text("  Para a primeira fase do jogo deve-se utilizar as setas do teclado:",40,300,320,400);
    image(setas, 150, 310, 100, 100);
    triangle(10, 20, 30, 10, 30, 30);
    if(mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 10 + 30){
     if(mouseIsPressed) {
       tela = 1;
     }
    }
    
  }
}

function creditos(){
  if(tela==4){
    background('#C71585');
    fill('#FFE4E1');
    textStyle(BOLD)
    textSize(16);
    noStroke();
    textAlign(LEFT);
    text("Liohana Maria -                                             Acadêmica em           Ciência & Tecnologia (UFRN)", 210,20,170,170);
    text("Natália Lima -               Licenciada em Letras     (UFRPE)", 40,320,180,150);
    triangle(10, 20, 30, 10, 30, 30);
    if(mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 10 + 30){
     if(mouseIsPressed) {
       tela = 1;
     }
    }
    image(foto1, 40, 10, 150, 190);
    image(foto2, 210, 210, 180, 180);
  }
    
}
