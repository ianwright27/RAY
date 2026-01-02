export class CameraController {
  constructor(videoEl) {
    this.video = videoEl;
    this.stream = null;
  }

  async start() {
    if (this.stream) return;

    this.stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    });

    this.video.srcObject = this.stream;
    this.video.muted = true;
    await this.video.play();
  }

  stop() {
    if (!this.stream) return;

    this.stream.getTracks().forEach(t => t.stop());
    this.video.srcObject = null;
    this.stream = null;
  }

  isActive() {
    return !!this.stream;
  }
}
