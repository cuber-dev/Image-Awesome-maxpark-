const nameInput = document.getElementById('name-input');
const nameForm = document.getElementById("nameForm");

// Image cards container 
let imagesContainer = document.getElementById('container');
imagesContainer.classList.add('hide');

let formats  = [
    "Identicon",
    "Botts",
    "Pixel-art",
    "Pixel-art-neutral",
    "Adventure",
    "Thumb",
    'Icon',
    'Adventurer-neutral',
    'Avaatars',
    'Avaatars-neutral',
    'Big-ears',
    'Big-ears-neutral',
    'Big-smile',
    'Botts-neutral',
    'Croodles',
    'Croodles-neutral',
    'Fun-emoji',
    'Lorelei',
    'Lorelei-neutral',
    'Shapes'
    ];
let path = [
    '5.x/identicon',
    '5.x/bottts',
    '4.x/pixel-art',
    '5.x/pixel-art-neutral',
    '5.x/adventurer',
    '5.x/thumbs',
    '5.x/icons',
    '5.x/adventurer-neutral',
    '5.x/avataaars',
    '5.x/avataaars-neutral',
    '5.x/big-ears',
    '5.x/big-ears-neutral',
    '5.x/big-smile',
    '5.x/bottts-neutral',
    '5.x/croodles',
    '5.x/croodles-neutral',
    '5.x/fun-emoji',
    '5.x/lorelei',
    '5.x/lorelei-neutral',
    '5.x/shapes'
  ];
  
async function doWork(string){
  //For removing previously created child's
  imagesContainer.innerHTML = '';
  
  formats.forEach(async (e, i) => {
    
    //creating elements
    let imageDiv = document.createElement('div');
    let paraTag = document.createElement('p');
    let imageTag = document.createElement('img');
    let aButton = document.createElement('a');
    
    //Adding attributes and values
    imageDiv.classList.add('imageDiv');
    
    paraTag.innerHTML = `Your name <b>${string}</b> in <b>${formats[i]}</b> Image formats`;
    
    imageTag.src = `https://api.dicebear.com/${path[i]}/svg?seed=${string}`;
    
    aButton.textContent = 'Loading...';
    aButton.style.opacity = "0.6";
    aButton.classList.add('download');
    aButton.download = `${string}.jpg`;
   
    // Making request for Download button
    let response = await fetch(`https://api.dicebear.com/${path[i]}/jpg?seed=${string}`);
    let blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    aButton.href = imageUrl;
    aButton.style.opacity = '1';
    aButton.textContent = 'Download';
    aButton.style.opacity = "1";
    
    //Adding child's 
    imageDiv.appendChild(paraTag);
    imageDiv.appendChild(imageTag);
    imageDiv.appendChild(aButton);

    imagesContainer.appendChild(imageDiv);
    
  });
}


nameForm.addEventListener('submit',() => {
  event.preventDefault();
  doWork(nameInput.value);
  setTimeout(() => {
      imagesContainer.classList.remove('hide');
  },500);
});