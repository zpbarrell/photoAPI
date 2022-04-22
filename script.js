const form = document.getElementById('form')

let width = document.querySelector('#width');
let height = document.querySelector('#height'); 
let url;
let randomImage;
let navBar = document.querySelector('nav');
const grayBtn = document.getElementById('grayScale');
const sepiaBtn = document.getElementById('sepia');
const originalBtn = document.getElementById('original');
const image = document.getElementById('random-img');
form.addEventListener('submit', getPhoto)

navBar.style.display = 'none';
image.style.display = 'none';

function getPhoto(event) {
    event.preventDefault();
    
    url = `https://picsum.photos/${width.value}/${height.value}`
    console.log("Height:" + height.value);
    console.log("Width:" + width.value);
    console.log(url);
    fetch(url)
    .then(function(response) {
        if(!response.ok){
            // console.log(response);
            return new Error(response);
        }
        // console.log("Response:", response);
        return response.blob();
    })
    .then(function(photoBlob) {
        // console.log("my Blob", photoBlob);
        let objectURL = URL.createObjectURL(photoBlob);
        let randomImage = document.querySelector('#random-img');
        // console.log("Object URL", objectURL);
        randomImage.src = objectURL;
        navBar.style.display = 'block';
        image.style.display = 'block';
    })
    .catch(function(err) {
        console.log(err);
    })
}

function makeGray(){
    // image.src= url + "?grayscale"
    image.style.filter = "grayscale(100%)";
    grayBtn.style.color = "darkgray";
    sepiaBtn.style.color = "black";
    originalBtn.style.color = "black";
   
}

function makeSepia() {
    image.style.filter = "sepia(80%)";
    grayBtn.style.color= "black";
    sepiaBtn.style.color = "darkgray";
    originalBtn.style.color = "black";
}

function makeOriginal(){
    image.style.filter = "sepia(0%)", "grayscale(0%)";
    grayBtn.style.color = "black";
    sepiaBtn.style.color = "black";
    originalBtn.style.color = "darkgray";
}
