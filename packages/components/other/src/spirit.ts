const random = Math.random.bind(Math);
const floor = Math.floor.bind(Math);

export default class Spirit {
  ctx: CanvasRenderingContext2D;
  options: any;
  x: number;
  y: number;
  vy: number;
  angle: number;
  vangle: number;
  img: HTMLImageElement;
  constructor(ctx: CanvasRenderingContext2D, options: any, imgs: string[]) {
    this.ctx = ctx;
    this.options = options;
    this.x = this.randomX();
    this.y = -200;
    this.vy = 1.2 + random();
    this.angle = 0;
    this.vangle = random() > 0.5 ? random() : -random();
    this.img = new Image();
    this.img.src = imgs[floor(random() * 11)];
  }
  draw() {
    this.ctx.save();
    this.ctx.translate(this.x + 10, this.y + 10);
    this.ctx.rotate((this.angle * Math.PI) / 360);
    this.ctx.drawImage(
      this.img,
      100,
      100,
      16 * this.options.ratio,
      16 * this.options.ratio
    );
    this.ctx.restore();
  }
  update() {
    this.y += this.vy;
    this.angle += this.vangle;
  }
  randomX() {
    const { width, ratio } = this.options;
    return floor(random() * width) * ratio;
  }
}
