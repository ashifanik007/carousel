const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
    'images/pic-10.jpg',
    'images/pic-11.jpg'
];
let imageIndex = 0;
const sliderImg = document.getElementById('slider-img');
setInterval( () => {
    if(imageIndex >= images.length){
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    sliderImg.setAttribute('src', imgUrl);
    imageIndex++;
}, 3000)