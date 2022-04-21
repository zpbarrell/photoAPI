const form = document.getElementById('form')

// let url = `https://picsum.photos/${width}/${height}`

let width = document.querySelector('#width');
let height = document.querySelector('#height'); 
let url;
let randomImage;
let navBar = document.querySelector('nav');
navBar.style.display = 'none';
const grayBtn = document.getElementById('grayscale');
const sepiaBtn = document.getElementById('sepia');
const originalBtn = document.getElementById('original');
const image = document.getElementById('random-img');
form.addEventListener('submit', getPhoto)

function getPhoto(event) {
    event.preventDefault();
    
    url = `https://picsum.photos/${width.value}/${height.value}`
    console.log("Height:" + height.value);
    console.log("Width:" + width.value);
    console.log(url);
    fetch(url)
    .then(function(response) {
        if(!response.ok){
            console.log(response);
            return new Error(response);
        }
        console.log("Response:", response);
        return response.blob();
    })
    .then(function(photoBlob) {
        console.log("my Blob", photoBlob);
        let objectURL = URL.createObjectURL(photoBlob);
        let randomImage = document.querySelector('#random-img');
        console.log("Object URL", objectURL);
        randomImage.src = objectURL;
        navBar.style.display = 'block';
    })
    .catch(function(err) {
        console.log(err);
    })
}

function makeGray(){
    // image.src= url + "?grayscale"
    image.style.filter = "grayscale(100%)";
    // document.getElementById('random-img').style.filter: grayscale(100%);
    // image.css("-webkit-filter", "grayscale(1)");
}

function makeSepia() {
    image.style.filter = "sepia(80%)";
}

function makeOriginal(){
    image.style.filter = "sepia(0%)", "grayscale(0%)";
}
// function grayScale()
// {
// grayBtn.style.display= 'none';
// }

// grayBtn.addEventListener('click', function(e) {
//     console.log("gray btn clicked");
//     function changeGray(color) {
//         image.style.color = gray;
//     }
// });


// grayBtn.addEventListener('click', function(e) {
//     console.log("gray btn clicked")
    // image.style.backgroundColor = 'black';
    // image.style.color = "black";
    // document.getElementTagName('h1').style.color = "red"; just checking for functionality
// });


// sepiaBtn.addEventListener('click', function(e) {
//     console.log("Sepia btn clicked")
// });

// originalBtn.addEventListener('click', function(e) {
//     console.log("Original btn clicked")
// });

// img.addEventListener('click', () => {
//     quoteContainer.removeChild(quote);
//     quoteContainer.removeChild(img);

//     fetchQuote();
// })
// let grayBtn = document.querySelector('#grayscale');
// grayBtn.style.display = 'none';



// if (randomImage.length === 1) {
//     gray.style.display = 'block';
// } else {
//     gray.style.display = 'none';
// }
// gray.addEventListener('click', grayscale)
// function grayscale(e) {
//     //change all pixels of image to gray
//     for (var pixel of center.values()) {
//       var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
//       pixel.setRed(avg);
//       pixel.setGreen(avg);
//       pixel.setBlue(avg);
//     }
// }