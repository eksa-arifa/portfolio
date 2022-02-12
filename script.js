const navbar = document.querySelector('.navbar');
const bars = document.querySelector('.navbar i');
const link = document.querySelectorAll('.navbar ul li');
const project = document.querySelector('.project .flex');
const totop = document.querySelector('.scroll-to-top');
const type = document.querySelector('.home .left-column .typing');
const more = document.querySelector('.project .show-more');

bars.onclick = ()=>{
  navbar.classList.toggle('active');
  if (navbar.classList.contains('scroll') == false) {
    navbar.classList.add('scroll');
  }
}

let i = 0;

while(i < link.length){
  link[i].onclick = ()=>{
    navbar.classList.remove('active');
  }
  
  i++;
}

window.onscroll = ()=>{
  if (window.scrollY > 20) {
    navbar.classList.add('scroll');
  }else{
    navbar.classList.remove('scroll');
  }
  if (window.scrollY > 400) {
    totop.classList.add('active');
  }else{
    totop.classList.remove('active');
  }
}

fetch('https://api.github.com/users/eksa-arifa/repos').then(response => response.json()).then(data => {
      let t = 0;
      let jumlahData = 10;
      more.onclick = ()=>{
        jumlahData = jumlahData + 10;
        if (jumlahData > data.length) {
          more.style.display = "none";
        }
        while(t < jumlahData){
          project.innerHTML += '<div class="card"><a href="'+data[t].html_url+'">'+data[t].name+'</a></div>';
          t++;
        }
      }
      while(t < jumlahData){
        project.innerHTML += '<div class="card"><a href="'+data[t].html_url+'">'+data[t].name+'</a></div>';
        t++;
      }
});

var t = 0;
var txt = 'Web Developer';
var speed = 200;
            
function typeWriter() {
  if (t < txt.length) {
     type.innerHTML += txt.charAt(t);
     t++;
     setTimeout(typeWriter, speed);
   }
}
typeWriter();