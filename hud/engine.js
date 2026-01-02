export class HUDEngine {
  constructor(ctx, video) {
    this.ctx = ctx;
    this.video = video;
    this.lastTime = 0;
  }

  start() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(time) {
    const dt = time - this.lastTime;
    this.lastTime = time;

    this.clear();
    this.drawHeartbeat(time);

    requestAnimationFrame(this.loop.bind(this));
  }

  clear() {
    const { width, height } = this.ctx.canvas;
    this.ctx.clearRect(0, 0, width, height);
  }

  drawHeartbeat(time) {
    const { width, height } = this.ctx.canvas;

    const pulse = 0.5 + 0.5 * Math.sin(time * 0.005);

    this.ctx.strokeStyle = `rgba(0, 255, 255, ${pulse})`;
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(width / 2, height / 2, 40 + pulse * 10, 0, Math.PI * 2);
    this.ctx.stroke();
  }
}
