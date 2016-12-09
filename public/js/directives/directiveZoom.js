function directiveZoom() {
    return {
        restrict: 'A',
        link: function() {
            var zoom = document.getElementById("zoom"),
                zoom_area = document.getElementById("zoom_area"),
                zoom_sur = document.getElementById("zoom_sur"),
                image = new Image();
            image.onload = function() {
                zoom.style.background = "url('" + image.src + "') no-repeat";
                document.getElementById("zoom_area").onmousemove = () => {
                    var x = event.clientX - zoom_area.offsetLeft,
                        y = event.clientY - zoom_area.offsetTop;
                    if (x > 0 && x < zoom_area.clientWidth && y > 0 && y < zoom_area.clientHeight) {
                        zoom.style.display = "block";
                    } else {
                        zoom.style.display = "none";
                    }
                    var rx = -Math.round(this.width / zoom_sur.clientWidth * x - zoom.clientWidth / 2),
                        ry = -Math.round(this.height / zoom_sur.clientHeight * y - zoom.clientHeight / 2);
                    zoom.style.left = (x - zoom.clientWidth / 2) + "px";
                    zoom.style.top = (y - zoom.clientHeight / 2) + "px";
                    zoom.style.backgroundPosition = rx + "px " + ry + "px";
                };
            };
            image.src = zoom_sur.getAttribute("src");

        }
    };
}
