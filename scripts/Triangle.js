let cv = document.getElementById("mycanvas");
let ctx = cv.getContext("2d");
var points = [];

function init() {
  cv.addEventListener(
    "click",
    function(evt) {
      var mouse_pos = getMousePos(cv, evt);

      if (points.length < 3) points.push(new Point(mouse_pos.x, mouse_pos.y));

      if (points.length == 3) {
        var index = Math.round(Math.random() * 2);
        var p = points[index];
        p.drawPoint(ctx);

        for (var i = 0; i < 55000; i++) {
          index = Math.round(Math.random() * 2);
          p = new Point(
            (p.x + points[index].x) / 2,
            (p.y + points[index].y) / 2
          );
          p.drawPoint(ctx);
        }
        points = [];
      }
    },
    true
  );
}

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

init();
