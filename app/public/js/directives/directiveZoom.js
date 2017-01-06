function directiveZoom() {
    return {
        restrict: 'AE',
        link: function() {
            var zoom = document.getElementById("zoom"),
                zoom_area = document.getElementById("zoom_area"),
                zoom_sur = document.getElementById("zoom_sur"),
                image = new Image(),
                navbar = document.getElementsByClassName("nav-wrapper"),
                title = document.getElementsByClassName("main_parcours"),
                nav = document.getElementsByClassName("pres1fixed");
            image.onload = function() {
                zoom.style.background = "url('" + image.src + "') no-repeat";
                document.getElementById("zoom_area").onmousemove = () => {
                    var x = event.clientX - zoom_area.offsetLeft,
                        y = event.clientY - (zoom_area.offsetTop+navbar[0].clientHeight+title[0].clientHeight+nav[0].clientHeight);
                        // console.log("y:" + y + " zoom_area_offsetTop:" + zoom_area.offsetTop + " event.clientY:" + event.clientY + " zoom_area.clientHeight" + zoom_area.clientHeight);
                    if (x > 0 && x < zoom_area.clientWidth && y > 0 && y < zoom_area.clientHeight) {
                        zoom.style.display = "block";
                    } else {
                        zoom.style.display = "none";
                    }
                    var rx = -Math.round(this.width / zoom_sur.clientWidth * x - zoom.clientWidth / 2);
                    var ry = 0;
                        // ry = -Math.round(this.height / zoom_sur.clientHeight * y - zoom.clientHeight / 2);
                    zoom.style.left = (x - zoom.clientWidth / 2) + "px";
                    zoom.style.top = (y - zoom.clientHeight / 2) + "px";
                    if (zoom_sur.hasAttribute('style')) {
                      ry = Math.round(this.height / zoom_sur.clientHeight * y - zoom.clientHeight * 8.5);
                      // ry = Math.round(this.height / zoom_sur.clientHeight * y - zoom.clientHeight / 2)-(zoom_area.clientHeight);
                      // console.log(ry);
                      zoom.style.backgroundPosition = rx + "px " + ry + "px";
                    } else {
                      ry = -Math.round(this.height / zoom_sur.clientHeight * y - zoom.clientHeight / 2);
                      // console.log(ry);
                      zoom.style.backgroundPosition = rx + "px " + ry + "px";
                    }
                };
            };
            image.src = zoom_sur.getAttribute("src");
        }
    };
}
