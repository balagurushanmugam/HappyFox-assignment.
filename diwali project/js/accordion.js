
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i< acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

let img = document.querySelector('img');
let accordion1 = document.querySelector('#accordion1');
let accordion2 = document.querySelector('#accordion2');
let accordion3 = document.querySelector('#accordion3');
let accordion4 = document.querySelector('#accordion4');


accordion1.addEventListener('onclick', () => {
  console.log('jsgd');
    img.src = '../assets/images/customer-service-1.png';
})

accordion2.addEventListener('onclick', () => {
    img.src = '../assets/images/customer-service-2.png';
})


accordion3.addEventListener('onclick', () => {
    img.src = '../assets/images/customer-service-3.png';
})


accordion4.addEventListener('onclick', () => {
    img.src = '../assets/images/customer-service-4.png';
})




function chnageimage(url){
  let img = document.getElementById('bala');
  img.src = url;
}

