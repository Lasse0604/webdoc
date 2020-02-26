let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
    
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    
  slideIndex++;
    
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
function myFunction() {
    let div = document.getElementById("video-istanbul");
    let rect = div.getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    w = rect.width;
    h = rect.height;
    b = rect.bottom;
    alert ("Left:" + x + ", Top:" + y + ", width:" + w + ", height:" + h + ",Bottom:"+b);
}

let vid = document.getElementById("video-istanbul");
vid.autoplay = true;
vid.load();
vid.loop = true;

window.onscroll = function(){
    let offsetTop = vid.getBoundingClientRect("video-istanbul").top
    let offsetBottom = vid.getBoundingClientRect("video-istanbul").bottom
    
    if(offsetBottom <= 0){
        vid.pause();
    } else if(offsetTop <= -300){
        vid.play();
    }
    let istVideo = document.getElementById("bager-video");
    let istAudio = document.getElementById("bager-audio");
        let offsetTopIst = vid.getBoundingClientRect("bager-video").top
        let offsetBottomIst = vid.getBoundingClientRect("bager-video").bottom
    
    if(offsetTopIst <=-1600 && offsetBottomIst >=-2101){
        istVideo.play();
        istVideo.loop = true;
        istAudio.play();
        istAudio.loop = true;
    }   
    else if(offsetTopIst > -1599){
        istVideo.pause();
        istAudio.pause();
    }
    
    else if(offsetBottomIst < -2100){
        istVideo.pause();
        istAudio.pause();
    }
}
