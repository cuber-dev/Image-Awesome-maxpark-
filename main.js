
const nameInput = document.getElementById('name-input');
const nameForm = document.getElementById("nameForm");

// Image cards container 
let imagesContainer = document.getElementById('container');
imagesContainer.classList.add('hide');

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

/* download downloadButtons */
let identiconLink = document.getElementById('identicon-link');
let botLink = document.getElementById('bot-link');
let pixelLink = document.getElementById('pixel-link');
let adventureLink = document.getElementById('adventure-link');
let thumbLink = document.getElementById('thumb-link');
let iconLink = document.getElementById('icon-link');

/* Arrays for manipulation */
let formatLabels  = ["Identicon","Botts","Pixel-art","Adventure","Thumb",'Icon'];
let paraItmes = [ideoutput,botoutput,pixoutput,adoutput,thumboutput,iconoutput];
let imagesAll = [identicon,bot,pixel,adventure,thumb,icon];
let path = [
    '5.x/identicon',
    '5.x/bottts',
    '4.x/pixel-art',
    '5.x/adventurer',
    '5.x/thumbs',
    '5.x/icons'
  ];
  
let downloadButtons = [identiconLink,botLink,pixelLink,adventureLink,thumbLink,iconLink];
downloadButtons.forEach((button, i) => {
  downloadButtons[i].style.opacity = '0.6';
  downloadButtons[i].textContent = "Loading...";
});

/* Making and adding appropriate values */
async function makeRequest(){
  imagesAll.forEach(async (image, i) => {
    paraItmes[i].innerHTML = `Your name <b>${nameInput.value}</b> in <b>${formatLabels[i]}</b> Image formatLabels`;
    image.src = `https://api.dicebear.com/${path[i]}/svg?seed=${nameInput.value}`;
    let response = await fetch(`https://api.dicebear.com/${path[i]}/jpg?seed=${nameInput.value}`);
    let blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    downloadButtons[i].href = imageUrl;
    downloadButtons[i].download = `${nameInput.value}.jpg`;
    downloadButtons[i].style.opacity = '1';
    downloadButtons[i].textContent = 'Download';
  });
}

nameForm.addEventListener('submit',() => {
  event.preventDefault();
  makeRequest();
  imagesContainer.classList.remove('hide');
});
