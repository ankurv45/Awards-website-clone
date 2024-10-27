// Create a new application
const app = new PIXI.Application();

// Initialize the application
await app.init({ resizeTo: window });

// Append the application canvas to the document body
document.querySelector("#scene").appendChild(app.canvas);

// Inner radius of the circle
const radius = 230;

// The blur amount
const blurSize = 72;

// Load the grass texture
const grassTexture = await PIXI.Assets.load("./img/bg.jpg");

// Create the grass background
const background = new PIXI.Sprite(grassTexture);

app.stage.addChild(background);
background.width = app.screen.width;
background.height = app.screen.height;

const circle = new PIXI.Graphics()
  .circle(radius + blurSize, radius + blurSize, radius)
  .fill({ color: 0xff0000 });

circle.filters = [new PIXI.BlurFilter(blurSize)];

const bounds = new PIXI.Rectangle(
  0,
  0,
  (radius + blurSize) * 2,
  (radius + blurSize) * 2
);
const texture = app.renderer.generateTexture({
  target: circle,
  style: { scaleMode: PIXI.SCALE_MODES.NEAREST },
  resolution: 1,
  frame: bounds,
});
const focus = new PIXI.Sprite(texture);

app.stage.addChild(focus);

background.mask = focus;

app.stage.eventMode = "static";
app.stage.hitArea = app.screen;
app.stage.on("pointermove", (event) => {
  focus.position.x = event.global.x - focus.width / 2;
  focus.position.y = event.global.y - focus.height / 2;
});

//GSAP Stuff here
