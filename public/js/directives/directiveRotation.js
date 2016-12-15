function directiveRotation() {
    return {
        restrict: 'AE',
        link: function() {
            document.getElementById("zoom").onmousedown = () => {
                var image = new Image();
                var rotationZoomSur = document.getElementById("zoom_sur");
                var rotationZoom = document.getElementById("zoom");
                image.src = rotationZoomSur.getAttribute("src");
                if (rotationZoomSur.hasAttribute('style')) {
                    rotationZoomSur.removeAttribute('style');
                    // rotationZoom.removeAttribute('style');
                    rotationZoom.setAttribute('style', 'background: url(' + image.src + ') no-repeat;');
                } else {
                    // rotationZoom.style.background = "url('" + image.src + "') no-repeat";
                    rotationZoomSur.setAttribute('style', 'transform: rotateX(180deg); -webkit-transform: rotateX(180deg); -ms-transform: rotateX(180deg);');
                    rotationZoom.setAttribute('style', 'background: url(' + image.src + ') no-repeat; transform: rotateX(180deg); -webkit-transform: rotateX(180deg); -ms-transform: rotateX(180deg);');
                }
            };
        }
    };
}
