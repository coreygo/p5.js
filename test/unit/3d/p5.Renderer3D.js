suite('p5.Renderer3D', function() {
  var myp5;

  if (!window.Modernizr.webgl) {
    return;
  }

  setup(function() {
    myp5 = new p5(function(p) {
      p.setup = function() {
        p.createCanvas(100, 100, p.WEBGL);
      };
    });
  });

  teardown(function() {
    myp5.remove();
  });

  suite('createCanvas(w, h, WEBGL)', function() {
    test('creates a p5.Renderer3D renderer', function() {
      assert.instanceOf(myp5._renderer, p5.Renderer3D);
    });
  });
});
