//array에서 랜덤하게 한가지 요소 골라오기

const images =["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // appemd는 가장 뒤에, prepend는 가장 위에 오는것