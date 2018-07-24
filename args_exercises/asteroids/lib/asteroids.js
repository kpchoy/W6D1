const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

const canvasEl = document.getElementsByTagName("canvas")[0];
const ctx = canvasEl.getContext("2d");

console.log("Webpack is working!");

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

mo.draw(ctx);
