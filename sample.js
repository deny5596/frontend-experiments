var autoplay = "muted";
var videoOptions = {
  autoplay: autoplay,
  sources: [{
    src: "//www.youtube.com/watch?v=EDuMsWYZm1M",
    type: "video/youtube"
  }],
  controls: true,
  youtube: {
    ytControls: 0, //1=YT control active
    playsinline: 1,
    showinfo: 1,
    rel: 1,
  },
  controlBar: {
    pictureInPictureToggle: false,
    volumePanel: { inline: false, },
  },
  preload: autoplay ? "metadata" : "auto",
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
};
var adPlayer = videojs("alc-video", videoOptions);
var contentPlayer = document.getElementById("alc-video_youtube_api");

if ((navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/Android/i)) &&
  contentPlayer.hasAttribute('controls')) {
  contentPlayer.removeAttribute('controls');
}

var init = function () {
  console.log("Tapped!!");
  adPlayer.ima.initializeAdDisplayContainer();
  // adPlayer.ima.setContentWithAdTag(null, options.adTagUrl, false);
  adPlayer.ima.changeAdTag(adTagUrl);
  adPlayer.ima.requestAds();
  wrapperDiv.removeEventListener(startEvent, init);
  // bigPlayButton.off(startEvent, init);
};

var videoElement = document.getElementById("alc-video");

// Start ads when the video player is clicked, but only the first time it's
// clicked.
startEvent = "click";
if (navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/Android/i)) {
  startEvent = "touchend";
}

var wrapperDiv = document.getElementById("alc-video");
wrapperDiv.addEventListener(startEvent, init);

var adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&"
  + "ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1"
  + "&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator=";
var options = {
  id: "alc-video",
  adTagUrl,
  preventLateAdStart: true,
  debug: true,
};

adPlayer.ima(options);

adPlayer.on(['loadstart', 'play', 'playing', 'firstplay', 'pause', 'ended', 'adplay', 'adplaying', 'adfirstplay', 'adpause', 'adended', 'contentplay', 'contentplaying', 'contentfirstplay', 'contentpause', 'contentended', 'contentupdate'], function (e) {
  console.warn('VIDEOJS player event: ', e.type);
});

// adPlayer.on("adsready", function () {
//   if (navigator.userAgent.match(/iPhone/i)) {
//     var imaDom = document.getElementById("alc-video_ima-ad-container");
//     imaDom.style.display = 'none';
//     imaDom.style.left = '-10000px';
//     imaDom.style.top = '-10000px';
//   }
// });
