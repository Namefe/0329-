const banner = document.querySelectorAll('.banner'); 
const speed = 1;

banner.forEach((img, index) => {
    let position = index * 150; 
    function moveImage() {
        position += speed;
        if (position > window.innerWidth) {
            position = -650; 
        }
        img.style.left = position + 'px';
        requestAnimationFrame(moveImage);
        console.log(index)
    }
    moveImage(); 
});


const wrapper = document.querySelector('.HeaderOpenBtn');
wrapper.addEventListener('click',function(){
    document.querySelector('headernavigation').style.display='block'
})




document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("highlight").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("playlist").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("inviteYou").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector('.closebtn').addEventListener('click',()=>{
    document.querySelector('.headernavigation').style.display='none'
  })
  document.querySelector('.HeaderOpenBtn').addEventListener('click',()=>{
    document.querySelector('.headernavigation').style.display='block';
  })

  document.addEventListener('DOMContentLoaded', function () {
    const targets = document.querySelectorAll('.playliststicker-wrapper');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
        } else {
          entry.target.classList.remove('on');
        }
      });
    }, {
      threshold: 0.5
    });
  
    targets.forEach(target => observer.observe(target));
  });