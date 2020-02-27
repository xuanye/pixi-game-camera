'use strict'

import PIXICamera from '../camera-pixi.js';

// // 2D Rendering Context
// const canvas = document.querySelector('#ctx');
// const ctx = canvas.getContext('2d');

// const image1 = new Image();
// image1.src = 'assets/parallax_forest_pack/layers/parallax-forest-back-trees.png';

// const image2 = new Image();
// image2.src = 'assets/parallax_forest_pack/layers/parallax-forest-lights.png';

// const image3 = new Image();
// image3.src = 'assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png';

// const image4 = new Image();
// image4.src = 'assets/parallax_forest_pack/layers/parallax-forest-front-trees.png';

// let untitled;

// image4.onload = () => {
//   // ctx.drawImage(image1, 0, 0, 500, 300);
//   // ctx.drawImage(image2, 0, 0, 500, 300);
//   // ctx.drawImage(image3, 0, 0, 500, 300);
//   // ctx.drawImage(image4, 0, 0, 500, 300);

//   untitled = new Untitled(ctx, [image1, image2, image3, image4]);

//   render();
// };

// function render() {
//   untitled.shake();

//   ctx.drawImage(image1, 0, 0, 500, 300);
//   ctx.drawImage(image2, 0, 0, 500, 300);
//   ctx.drawImage(image3, 0, 0, 500, 300);
//   ctx.drawImage(image4, 0, 0, 500, 300);

//   ctx.restore();

//   requestAnimationFrame(render);
// }

const app = new PIXI.Application({ width: 500, height: 300 });

const container1 = new PIXI.Container();
const container2 = new PIXI.Container();
const container3 = new PIXI.Container();
const container4 = new PIXI.Container();

document.body.appendChild(app.view);

const image1 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-back-trees.png');
const image2 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-lights.png');
const image3 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png');
const image4 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-front-trees.png');

image1.width = 1500;
image1.height = 1300;

image2.width = 500;
image2.height = 300;

image3.width = 500;
image3.height = 300;

image4.width = 500;
image4.height = 300;

container1.addChild(image1);
container2.addChild(image2);
container3.addChild(image3);
container4.addChild(image4);

app.stage.addChild(container1, container2, container3, container4);

const options = {
  ticker: app.ticker,
  sprite: PIXI.Sprite,
  texture: PIXI.Texture,
};

const pc = new PIXICamera(options);
//const pc = new PIXICamera();

const main = pc.camera(app.stage);

// app.stage.pivot.x = 1000;
// app.stage.pivot.y = 800;
//const zoom = main.zoomTo(2, 2, 4000, pc.EASING.easeBounceIn);
//const shake = main.shake(5, 4000);
//main.panTo(1000, 1000, 3000);

const fade = main.fade(0x000000, 4000, pc.EASING.easeCubicIn);

//main.panTo(0, 0, 3000);

// pc.zoomTo(app.stage, 10, 5000);

//const worldShake = pc.shake(app.stage);

//worldShake.start();
app.ticker.add(time => {

  //main.shake({ duration: 3000 });
});
