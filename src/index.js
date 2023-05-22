import {fabric} from 'fabric';

console.log("test")

function run() {
  let canvas = new fabric.Canvas('myCanvas',{
    isDrawingMode: true
  });
  //   let rect = new fabric.Rect({
      //     left: 100,
      //     top: 100,
      //     fill: 'red',
      //     width: 20,
      //     height: 20
      //   });
      //   canvas.add(rect);
      var clearEl = $('clear-canvas');
      clearEl.onclick = function() { canvas.clear() };
    }
    
run();