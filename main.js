let name = prompt("What is your name?");


/*Image headings */
let ideoutput = document.getElementById("ideoutput");
let botoutput = document.getElementById("botoutput");
let pixoutput = document.getElementById("pixoutput");
let adoutput = document.getElementById("adoutput");
let thumboutput = document.getElementById("thumboutput");
let iconoutput = document.getElementById("iconoutput");


/* Images */
let identicon = document.getElementById('identicon');
let bot = document.getElementById('bot');
let pixel = document.getElementById('pixel');
let adventure = document.getElementById('adventure');
let thumb = document.getElementById('thumb');
let icon = document.getElementById('icon');

/* download links */
let identiconLink = document.getElementById('identicon-link');
let botLink = document.getElementById('bot-link');
let pixelLink = document.getElementById('pixel-link');
let adventureLink = document.getElementById('adventure-link');
let thumbLink = document.getElementById('thumb-link');
let iconLink = document.getElementById('icon-link');

/* Arrays for manipulation */
let  format  = ["Identicon","Botts","Pixel-art","Adventure","Thumb",'Icon'];
let paraItmes = [ideoutput,botoutput,pixoutput,adoutput,thumboutput,iconoutput];
let Items = [identicon,bot,pixel,adventure,thumb,icon];
let path = [
    '5.x/identicon',
    '5.x/bottts',
    '4.x/pixel-art',
    '5.x/adventurer',
    '5.x/thumbs',
    '5.x/icons'
  ];
let links = [identiconLink,botLink,pixelLink,adventureLink,thumbLink,iconLink];

/* Making and adding appropriate values */
async function makeRequest(){
  Items.forEach(async (e, i) => {
    paraItmes[i].innerHTML = `Your name <b>${name}</b> in <b>${format[i]}</b> Image format`;
    e.src = `https://api.dicebear.com/${path[i]}/jpg?seed=${name}`;
    let response = await fetch(`https://api.dicebear.com/${path[i]}/jpg?seed=${name}`);
    let blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    links[i].href = imageUrl;
    links[i].download = `${name}.jpg`;
  });
}


if(name !== null && name !== undefined){
  makeRequest();
}else{
  window.location.reload();
}


/*Relaod*/
let refresh = document.getElementById('note');
refresh.addEventListener('click',() => {
  window.location.reload();
});
