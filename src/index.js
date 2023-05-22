import { fabric } from "fabric";

console.log("test");

function run() {
  let canvas = new fabric.Canvas("myCanvas", {
    isDrawingMode: true,
  });
  let line = new fabric.Rect({
    left: 100,
    top: 100,
    fill: "black",
    width: 200,
    height: 2,
  });
  canvas.add(line);
  var clearEl = document.getElementById("clear-canvas");
  clearEl.onclick = function () {
    canvas.clear();
  };

  document.getElementById("downloadbtn").onclick = saveImage();
  function saveImage(c) {
    this.href = canvas.toDataURL({
      format: "png",
      quality: 0.8,
    });
    this.download = "testimage.png";
  }
}

run();
