const images = ["00.jpg", "01.jpg" , "02.jpg", "03.jpg", "04.jpg", "05.jpg" ,"06.jpg" ,"07.jpg"]
const imageContainer = document.querySelector("#wrap")
const chosenImage = images[Math.floor(Math.random() * images.length)];

imageContainer.style.backgroundImage = `url('img/${chosenImage}')`;