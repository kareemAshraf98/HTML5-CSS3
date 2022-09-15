//get video id from HTML
var Video = document.getElementById("my-video");
//play video button funtion
function playPause(vidn){
    var vid = document.getElementById(vidn);
    if(vid.paused){
        vid.play();
    }
}
//stop video button funtion
function pauseplay(vido){
    var video = document.getElementById(vido);
    if(video.played){
        video.pause();
    }
}
//mute sound of video button funtion
function muteSound(){
    var muteBtn = document.getElementById("mute");
    if(Video.muted){
        Video.muted = false;
        muteBtn.innerHTML = "Mute";
        document.getElementById("sound").value = "1";
    }else{
        Video.muted = true;
        muteBtn.innerHTML = "Unmute";
        document.getElementById("sound").value = "0";
    }

}
//full screen button funtion
function FullScreen(){
    if(Video.requestFullscreen){
        Video.requestFullscreen();
    } else if(Video.webkitRequestFullScreen){
        Video.webkitRequestFullScreen();
    }else if(Video.mozRequestFullScreen){
        Video.mozRequestFullScreen();
    }
}
//play forward funtion
function PlayForward(){
    if(Video.currentTime){
        Video.currentTime +=5;
    }
}
//play back button funtion
function playBack(){
    if(Video.currentTime){
        Video.currentTime -= 5;
    }
}
//play from beginning button funtion
function startAgain(){
    if (Video.played || Video.paused) {
        Video.load();
        Video.play();
    }
}
//end video function button
function endVideo(){
   if(Video.currentTime < Video.duration){
    Video.currentTime = Video.duration;
   }
}
//speed video time function
function speedVideo(){
    if(Video.currentTime != Video.duration){
        Video.playbackRate++;
    }
}
var slider =document.getElementById("seekSlider");
function start(e){
    Video.currentTime = e.value;
}
Video.ontimeupdate = function(){
    slider.value = Video.currentTime;
}