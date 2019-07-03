var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3, playlist: 'Rca3D9SgozA', loop: 1};
var vid = [
      {'videoId': 'Rca3D9SgozA', 'loop': 1, 'suggestedQuality': 'default', 'playlist': 'Rca3D9SgozA'},
		],
		randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}
setInterval(function(){
  //console.log(tv.getPlayerState());
}, 3000);

function onPlayerReady(){
  tv.loadVideoById(vid[currVid]);
  tv.unMute();
  //tv.mute();
  document.querySelector('.active').click();
}

function onPlayerStateChange(e) {
  //console.log(e.data);
  if (e.data === 1){
    document.querySelector('.overlay_load').style.display = 'none';
    //$('#tv').addClass('active');
    //$('.hi em:nth-of-type(2)').html(currVid + 1);
  } else if (e.data === 2){
    //$('#tv').removeClass('active');
    if(currVid === vid.length - 1){
      currVid = 0;
    } else {
      currVid++;  
    }
    tv.loadVideoById(vid[currVid]);
    //tv.seekTo(vid[currVid].startSeconds);
  } else if (e.data === 0){
    randomVid = Math.floor(Math.random() * vid.length);
    currVid = randomVid;
    tv.loadVideoById(vid[currVid]);
  } else if (e.data === -1){
    tv.playVideo();
  }

  document.addEventListener('mousemove', function(){
    if( tv.getPlayerState() === -1 ){
      tv.playVideo();
    }
  });
}

function vidRescale(){
  var w = document.body.clientWidth + 200, h = document.body.clientHeight + 200;
  if ( w / h > 16 / 9 ){
    tv.setSize( w, w / 16 * 9 );
  } else {
    tv.setSize( h / 9 * 16, h );
  }
}

window.addEventListener('load', vidRescale, false);
window.addEventListener('resize', vidRescale, false);

document.querySelector('#mute').addEventListener('click', function(){
  if( document.querySelector('#mute').title == 'Включить звук' ){
    tv.unMute();
    document.querySelector('#mute').style.backgroundImage = "url('/examples/file2/img/vol_up.svg')";
    document.querySelector('#mute').title = 'Выключить звук';
  } else {
    tv.mute();
    document.querySelector('#mute').style.backgroundImage = "url('/examples/file2/img/vol_mute.svg')";
    document.querySelector('#mute').title = 'Включить звук';
  }

});