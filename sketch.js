var button1;
var button2;
var button3;
let a;

function preload() {
  collage = loadImage ('CogDisCollage.jpg');
  txt =loadImage('Boring.jpg');
  shoes =loadImage('shoeShop.jpg');
}
function setup() {
  createCanvas(1920,1080);
  background(222, 235, 52);
  
  button1 = createButton(" L E A R N ");
  button1.position(1250, 30);
  button1.style("font-size", "24px");
  button1.style("color", "black");
  button1.style("padding", "1%");
  
  button2 = createButton(" S H O P");
  button2.position(1200, 1010);
  button2.style("font-size", "24px");
  button2.style("color", "purple");
  button2.style("padding", "1%");
  
  button3 = createButton(" BE BETTER");
  button3.position(650, 750);
  button3.style("font-size", "14px");
  button3.style("color", "green");
  button3.style("padding", "1%");
  
  button4 = createButton("BACK -> HOME");
  button4.position(1650, 780);
  button4.style("font-size", "14px");
  button4.style("color", "red");
  button4.style("padding", "1%");

  
  image(collage,0,0,width,height);
}

function draw() {
  
  button1.mousePressed(learner);
  button2.mousePressed(shopper);
  button3.mousePressed(better);
  button4.mousePressed(home);
  
  
  
}

function learner() {
  background(255);
  image(txt,0,50);
}

function better() {
   a = createA('https://goodonyou.eco/the-ultimate-guide-to-sustainable-sneakers/','sustainable sneaker alternatives');
  a.position(50,60)
}

function home() {
  image(collage,0,0,width,height);
}

function shopper() {
  image(shoes,0,0,width,height);
  filter(GRAY);
 textSize(50);
  fill(192, 255, 20);
  textStyle(BOLD);
text('CLICK A SHOE TO PURCHASE',400, 1000);

  
  var img = new Image();
  img.src = 'shoeShop.jpg';
  img.onclick = function() {
    alert("WARNING!! By purchasing this product you are directly supporting forced labor")
    alert("WARNING!! By purchasing this product you are  polluting our only earth")
    alert("WARNING!! Buying this product directly emits toxins")
    alert("WARNING!! By purchasing this product you are directly supporting unethical financial activities")
    alert("WARNING!! By purchasing this product you are directly supporting corportate lobbying")
    alert("WARNING!! By purchasing this product you are directly supporting animal cruilty")
    alert("Please go back and learn about the implications of your purchase before proceeding.")
  };
  document.body.appendChild(img);
}

