const fadeOut = () => {
    let opacity = 0.8;
    const el = document.getElementById('confirmDivBox999');
    const opacityTimer = setInterval(function () {

        if (opacity > 0.0) {

            el.style.opacity = opacity;
            opacity -= .01;

        } else {
            clearInterval(opacityTimer);
        }

    }, 10);

    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, 850);
}

export default fadeOut;