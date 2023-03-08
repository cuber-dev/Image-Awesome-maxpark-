var name = prompt("What is your name?");
document.getElementById("botoutput").innerHTML = "Your name " + name + " in bottts Image format";
document.getElementById("ideoutput").innerHTML = "Your name " + name + " in Identicon Image format";
document.getElementById("pixoutput").innerHTML = "Your name " + name + " in Pixel-art Image format";
document.getElementById("bot").src = "https://api.dicebear.com/5.x/bottts/svg?seed=" + name;
document.getElementById("identicon").src = "https://api.dicebear.com/5.x/identicon/svg?seed=" + name;
document.getElementById("pixel").src = "https://api.dicebear.com/4.x/pixel-art/svg?seed=" + name;
  