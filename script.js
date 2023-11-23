var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var right = document.getElementById("right");

icon.onclick = function(){
    // mySong.play();
    if(mySong.paused){
        mySong.play();
        icon.src="pause.png";
        document.getElementById('hed') .innerHTML="Kizz-Daniel -My-G";
    }else{
        mySong.pause();
        icon.src = "play.png";
        var txtRemove = document.getElementById('hed');
        txtRemove.remove();
        
    }
}