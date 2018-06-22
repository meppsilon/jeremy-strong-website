const animate = (handler) => {
  let running = false;

  const runHandler = (e) => {
    handler(e);
    running = false;
  };

  const requestFrame = (e) => {
    if (!running) {
      running = true;
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runHandler.bind(this, e));
      } else {
        setTimeout(runHandler.bind(this, e), 66);
      }
    }
  };

  return requestFrame;
};

export default animate;
