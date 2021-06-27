let xDown = null;
let yDown = null;

const resetTouch = () => {
  /* reset values */
  xDown = null;
  yDown = null;
};

export const handleTouchMove = (e) => {
  if (!xDown || !yDown) return;

  let xUp = e.touches[0].clientX;
  let yUp = e.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  let direction = null;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) direction = "left";
    else direction = "right";
  } else if (Math.abs(xDiff) < Math.abs(yDiff)) {
    if (yDiff > 0) direction = "up";
    else direction = "down";
  }

  resetTouch();
  return direction;
};

export const handleTouchStart = (e) => {
  const firstTouch = e.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};
