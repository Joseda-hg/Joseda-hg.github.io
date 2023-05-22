import { fabric } from "fabric";

console.log("test");

function downloadD(dataurl, filename) {
  const link = document.createElement("a");
  link.href = dataurl;
  link.download = filename;
  link.click();
}

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
    canvas.add(line);
  };

  var download = document.getElementById("download");

  download.onclick = function () {
    var dataURL = canvas.toDataURL({
      format: "png",
      quality: 1.0,
    });
    console.log(dataURL);
    downloadD(dataURL, "Firma.png")
    // window.open(dataURL)
  };
}

run();
