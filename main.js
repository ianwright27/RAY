import { HUDEngine } from './hud/engine.js';
import { CameraController } from './hud/camera.js';

const video = document.getElementById('camera');
const canvas = document.getElementById('hud');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

const camera = new CameraController(video);
const hud = new HUDEngine(ctx, video);

hud.start();

// TEMP: manual toggle for now
window.startLiveCam = () => camera.start();
window.stopLiveCam = () => camera.stop();

window.startLiveCam(); 
