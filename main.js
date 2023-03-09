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

async function makeRequest(){
  Items.forEach(async (e, i) => {
    paraItmes[i].textContent = `Your name ${name} in ${format[i]} Image format`;
    e.src = "https://api.dicebear.com/" + path[i] + "/svg?seed=" + name;
    let response = await fetch("https://api.dicebear.com/" + path[i] + "/svg?seed=" + name);
    let blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    // image.src = imageUrl;
    links[i].href = imageUrl;
  });
}

if(name !== null || name !== undefined){
  makeRequest();
}else{
  window.location.reload();
}



/*Relaod*/
let refresh = document.getElementById('note');
refresh.addEventListener('click',() => {
  window.location.reload();
});
/*
fetch(apiUrl)
  .then(response => response.blob())
  .then(blob => {
    // Convert the blob to a data URL
    const imageUrl = URL.createObjectURL(blob);
    
    // Set the image source
    image.src = imageUrl;
    
    // Set the download link href attribute to the image data URL
    downloadLink.href = imageUrl;
  });*/
