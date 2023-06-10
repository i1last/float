let timingEaseOut = makeEaseOut(timing);
let timingEase = timing(timing);

function makeEaseOut(timing) {
    return (timeFraction) => {
      return 1 - timing(1 - timeFraction);
    }
}

function timing(timeFraction) {
    let x = 0;
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

async function animate({ timing, draw, duration }) {
    let start = performance.now();

    await new Promise((resolve) => {
        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            let progress = timing(timeFraction);
            draw(progress);
            if (timeFraction < 1) requestAnimationFrame(animate);
            else resolve();
        });
    });
}
