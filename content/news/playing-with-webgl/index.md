---
title: "Playing With Webgl"
date: 2020-12-14T15:43:47-06:00
images: [ anl-logo.jpg ]
draft: true
---
<div id="webgl-container"></div>
<video id="camera" style="display:none" width="640" height="480" autoplay></video>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.min.js" integrity="sha512-Q+IG0h7As6sfqE2t1Xf5IeamNyCXb4EXxGCA9Mlbpv7xtwurVHNdVDbyWeSQ3ulPf2FRlqeu77Ec3SJDdIR63w==" crossorigin="anonymous"></script>

<script>

window.onload = function() {
 runSketch();
};

function animate() {
  requestAnimationFrame(animate);
  render();
  //stats.update();
};

function render() {
  //uniforms.u_time.value = clock.getElapsedTime();
  //uniforms.u_frame.value += 1.0;
  renderer.render(scene, camera);
};

function runSketch() {
  let renderer;
  let scene;
  let video;
  let camera;

  console.log("runSketch");
  init();
  animate();

  function init() {
    scene = new THREE.Scene();
    video = document.getElementById( 'camera' );

    // Initialize the camera
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const texture = new THREE.VideoTexture( video );

    const geometry = new THREE.PlaneBufferGeometry(2, 2);
    //geometry.scale( 0.1, 0.1, 0.1 );
    const material = new THREE.MeshBasicMaterial( { map: texture } );

    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.domElement.className="w-100 img-fluid";
    //renderer.setPixelRatio( window.devicePixelRatio );
    //renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById("webgl-container").appendChild( renderer.domElement );
/*
    if ( navigator.mediaDevices && navigator.mediaDevices.getUserMedia ) {
      const constraints = { video: { width: 1280, height: 720, facingMode: 'user' } };
      navigator.mediaDevices.getUserMedia( constraints ).then( function ( stream ) {
        // apply the stream to the video element used in the texture
        video.srcObject = stream;
        video.play();
      } ).catch( function ( error ) {
        console.error( 'Unable to access the camera/webcam.', error );
      } );
};*/
  };
function animate() {
  requestAnimationFrame(animate);
  render();
  //stats.update();
 };

 /*
  * Renders the sketch
  */
 function render() {
  //uniforms.u_time.value = clock.getElapsedTime();
  //uniforms.u_frame.value += 1.0;
  renderer.render(scene, camera);
 };
};

// Grab elements, create settings, etc.
var video = document.getElementById('camera');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
</script>
