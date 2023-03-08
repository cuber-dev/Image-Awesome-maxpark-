let name = prompt("What is your name?");

let botoutput = document.getElementById("botoutput");
let ideoutput = document.getElementById("ideoutput");
let pixoutput = document.getElementById("pixoutput");
let adoutput = document.getElementById("adoutput");
let thumboutput = document.getElementById("thumboutput");
let iconoutput = document.getElementById("iconoutput");


let  format  = ["Botts","Identicon","Pixel-art","Adventure","Thumb",'Icon'];
let paraItmes = [botoutput,ideoutput,pixoutput,adoutput,thumboutput,iconoutput];

paraItmes.forEach((e, i) => {
  e.textContent = `Your name ${name} in ${format[i]} Image format`;
});



document.getElementById("bot").src = "https://api.dicebear.com/5.x/bottts/svg?seed=" + name;

document.getElementById("identicon").src = "https://api.dicebear.com/5.x/identicon/svg?seed=" + name;
document.getElementById("pixel").src = "https://api.dicebear.com/4.x/pixel-art/svg?seed=" + name;
document.getElementById("adventure").src = "https://api.dicebear.com/5.x/adventurer/svg?seed=" + name;
document.getElementById('thumb').src = "https://api.dicebear.com/5.x/thumbs/svg?seed=" + name;
document.getElementById('icon').src = "https://api.dicebear.com/5.x/icons/svg?seed=" + name;