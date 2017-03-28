var chirag = [
    {url: 'images/sky.png', x: -200, y: -150, offset: -0.4},
    {url: 'images/textwa.svg', x: -30, y: -75, offset: -0.4},
    {url: 'images/birdwa.svg', x: 0, y: 0, offset: -0.3},
    {url: 'images/skyline2.png', x: -100, y: -180, offset: -0.25},
    
    {url: 'images/feild.png', x: -65, y: -50, offset: -0.1},
    {url: 'images/potato.png', x: 130, y: 230, offset: -0.1},
    {url: 'images/fence.svg', x: 120, y: 390, offset: 0.10},
    {url: 'images/fence2.svg', x: -250, y: 390, offset: 0.10},
    {url: 'images/drawing.svg', x: 0, y: 0, offset: 0.0}
  ],
      layers = [],
      w = 550,
      h = 550,
      loaded = 0,
      container = document.getElementById('potatocontainer'),
      s = new Snap(w, h),
      grad,
      gradEl;


  container.appendChild(s.node);

  g = s.g();
  c = s.g();
  c.attr({transform: 'scale(1)'});
  g.append(c);

  for (var i = 0; i < chirag.length; i++) {
    var img = new Image();
    img.src = chirag[i].url;
    img.onload = handle_load;

    var _img = s.image(chirag[i].url, chirag[i].x, chirag[i].y);
    c.append(_img);
    layers.push(_img);
  }


  function handle_load(e) {
    loaded += 1;

    if (loaded == chirag.length) {
      handle_loaded();
    }
  }

  function handle_loaded() {

    var _mask = layers[layers.length - 1];
    g.attr({mask: _mask});

    createGradient();

    container.addEventListener('mousemove', handle_mousemove);
    container.addEventListener('mouseout', handle_mouseout);
    container.addEventListener('mouseover', handle_mouseover);
  }

  function handle_mousemove(e) {
    var dx = e.offsetX - (w / 2);
    var dy = e.offsetY - (h / 2);

    for (var i = 0; i < layers.length; i += 1) {
      var l = layers[i];
      var _x = dx * chirag[i].offset;
      var _y = dy * chirag[i].offset;
      TweenMax.to(l.node, 0.1, {x: _x, y: _y});
    }

    updateGradient(e);
    TweenMax.to(s.node, 0.2, {rotationY: dx / 10, rotationX: -dy / 10});
  }

  function handle_mouseout(e) {
    for (var i = 0; i < layers.length; i += 1) {
      var l = layers[i];
      TweenMax.to(l.node, 0.2, {x: 0, y: 0, ease: Quad.easeOut});
    }

    TweenMax.to(s.node, 0.2, {scale: 0.9, rotationY: 0, rotationX: 0, ease: Quad.easeOut});
    TweenMax.to(c.node, 1, {rotationY: 0, rotationX: 0});
  }

  function handle_mouseover(e) {
    TweenMax.to(s.node, 0.2, {scale: 1, ease: Back.easeOut});
  }

  function createGradient() {
    grad = s.gradient("l(0, 0, 1, 1)rgba(0,0,0,0.7)-rgba(0,0,0,0):65");

    gradEl = s.rect(0, 0, w, h);
    gradEl.attr({fill: grad, opacity: 0});

    g.append(gradEl);
  }

  function updateGradient(e) {
    var dx = e.offsetX - (w / 2);
    var dy = e.offsetY - (h / 2);
    var angle = Math.atan2(dy, dx);
    var points = angleToPoints(angle);

    var _opacity = Math.sqrt((dx * dx) + (dy * dy));

    grad.attr(points);
    TweenMax.to(gradEl.node, 0.1, {opacity: _opacity / 70});
  }

  function angleToPoints(angle) {
    var segment = Math.floor(angle / Math.PI * 2) + 2;
    var diagonal =  (1/2 * segment + 1/4) * Math.PI;
    var op = Math.cos(Math.abs(diagonal - angle)) * Math.sqrt(2);
    var x = op * Math.cos(angle);
    var y = op * Math.sin(angle);

    return {
      x1: x < 0 ? 1 : 0,
      y1: y < 0 ? 1 : 0,
      x2: x >= 0 ? x : x + 1,
      y2: y >= 0 ? y : y + 1
    };
  }