window.addEventListener('load', function(){
  sectionPanda[0].style.display = "inline-block";
  sectionPanda[1].style.display = "inline-block";
});

var img=document.querySelector('.section-foto');
img.addEventListener('click',function(event){
    event.preventDefault();
    if(event.target.tagName == "SPAN"){
      event.target.parentNode.style.display="none";
    }
});

var btnRestaurarFoto = document.getElementById('btnRestaurarFoto');
var fotoPanda = document.getElementsByClassName('foto-panda');
btnRestaurarFoto.addEventListener('click', function(){
  for (var i = 0; i < fotoPanda.length; i++) {
    fotoPanda[i].style.display = "inline-block";
  }
});

var sectionPanda = document.getElementsByClassName('section-panda');

var btnOrigen = document.getElementById('btnOrigen');
btnOrigen.addEventListener('click', function(){
  displayContentPanda(sectionPanda[0]);
});

var btnExtincion = document.getElementById('btnExtincion');
btnExtincion.addEventListener('click', function(){
  displayContentPanda(sectionPanda[1]);
});

function displayContentPanda(elemento){
  if(elemento.style.display == "inline-block"){
    elemento.style.display = "none";
  }
  else {
    elemento.style.display = "inline-block";
  }
}
