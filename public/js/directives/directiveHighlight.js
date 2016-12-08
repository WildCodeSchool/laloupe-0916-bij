function directiveHighlight() {
    return {
        restrict: 'A',
        link: function() {
            var id =0;
            document.getElementById('zoom_sur').draggable = false;
            document.getElementById("zoom_area").onmousedown = () => {
                this.xStart = Number(event.clientX);
                this.yStart = Number(event.clientY);
                document.getElementById("zoom_area").onmouseup = () => {
                    this.xEnd = Number(event.clientX);
                    this.yEnd = Number(event.clientY);
                    let width = this.xEnd - this.xStart < 0 ? this.xStart - this.xEnd : this.xEnd - this.xStart;
                    let height = this.yEnd - this.yStart < 0 ? this.yStart - this.yEnd : this.yEnd - this.yStart;
                    let xStart = this.xStart > this.xEnd ? this.xEnd : this.xStart;
                    let yEnd = this.yStart > this.yEnd ? this.yEnd : this.yStart;

                    console.log(width, height);
                    var box = document.createElement('div');
                    box.setAttribute('style', 'position: absolute; display: block; top: ' + yEnd + 'px; left: ' + xStart + 'px; width: ' + width + 'px; height: ' + height + 'px; background-color: yellow; opacity: .6');
                    box.className = 'highlight';
                    box.id = 'div' + id;
                    id++;
                    document.body.appendChild(box);
                };
            };
            document.getElementsByClassName("highlight").onmousedown = () => {
              console.log("pass");
              var el = document.getElementsByClassName("highlight");
              console.log(el);
              el = document.getElementById(el.id);
              document.body.removeChild(el);
            };
        }
    };
}
