let img1 = document.querySelector(".small-img-1");
let img2 = document.querySelector(".small-img-2");
let img3 = document.querySelector(".small-img-3");
let img4 = document.querySelector(".small-img-4");

let bigImg = document.querySelector(".big-img");
let headline = document.querySelector("h1");

img1.addEventListener("click", ()=> {
    img1.style.backgroundImage = "url('/assets/img/fak.jpg')";
    bigImg.style.backgroundImage = "url('/assets/img/fak.jpg')";
})
img2.addEventListener("click", ()=> {
    img2.style.backgroundImage = "url('/assets/img/drift-level-asian_o_690146.gif')";
    bigImg.style.backgroundImage = "url('/assets/img/drift-level-asian_o_690146.gif')";
})
img3.addEventListener("click", ()=> {
    img3.style.backgroundImage = "url('/assets/img/sex.jpg')";
    bigImg.style.backgroundImage = "url('/assets/img/sex.jpg')";
})
img4.addEventListener("click", ()=> {
    img4.style.backgroundImage = "url('/assets/img/weew.gif'')";
    bigImg.style.backgroundImage = "url('/assets/img/weew.gif')";
})

headline.addEventListener("click", ()=> {
    bigImg.style.backgroundImage = "url('/assets/img/first-time-drifting-reality-expectation-drift-memes-48912406.png')";
})


document.body.style.backgroundImage = "none";

const cuteArray = ["red", "blue", "green"]

let i = 0;
while (i < 200000) {
  task(i);
   i++;
}
function task(i) {
  setTimeout(function() {
    document.body.style.backgroundColor = cuteArray[Math.floor(Math.random() * 3)]
    console.log(document.body.style.backgroundColor);
  }, 10 * i);
}