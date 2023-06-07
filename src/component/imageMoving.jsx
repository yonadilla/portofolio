import React, { useEffect } from 'react';
import '../App.css';

function Moving() {
  useEffect(() => {
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
  }, []);

  function makeNewPosition() {
    let h = window.innerHeight - 50;
    let w = window.innerWidth - 50;
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    return [nh, nw];
  }

  function animateDiv(element) {
    let el = document.querySelector(element);
    let top = parseInt(el.style.top) || 0;
    let left = parseInt(el.style.left) || 0;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let duration = 5000;
      if (progress > duration) {
        start = timestamp;
        let newq = makeNewPosition();
        el.style.top = newq[0] + 'px';
        el.style.left = newq[1] + 'px';
        top = newq[0];
        left = newq[1];
      }

      el.style.top = easeInOutQuad(progress, top, newq[0] - top, duration) + 'px';
      el.style.left = easeInOutQuad(progress, left, newq[1] - left, duration) + 'px';

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        animateDiv(element);
      }
    }

    let newq = makeNewPosition();
    requestAnimationFrame(step);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  return (
    <div>
      <div className="a"></div>
      <div className="b"></div>
      <div className="c"></div>
      <div className="d"></div>
    </div>
  );
}

export default Moving;
