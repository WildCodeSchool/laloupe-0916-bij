function directiveHighlight() {
    return {
        restrict: 'A',
        link: function() {
            var id =0;
            document.getElementById('zoom_sur').draggable = false;
            // document.getElementById('sub_container_answer').draggable = false;
            document.getElementById('zoom_area').onmousedown = () => {
                this.xStart = Number(event.clientX) - document.getElementById('zoom_area').offsetLeft;
                this.yStart = Number(event.clientY) - document.getElementById('zoom_area').offsetTop-50;
                document.getElementById('zoom_area').onmouseup = () => {
                    this.xEnd = Number(event.clientX) - document.getElementById('zoom_area').offsetLeft;
                    this.yEnd = Number(event.clientY) - document.getElementById('zoom_area').offsetTop-50;
                    // console.log(this.xEnd, this.yEnd);
                    let width = this.xEnd - this.xStart < 0 ? this.xStart - this.xEnd : this.xEnd - this.xStart;
                    let height = this.yEnd - this.yStart < 0 ? this.yStart - this.yEnd : this.yEnd - this.yStart;
                    let xStart = this.xStart > this.xEnd ? this.xEnd : this.xStart;
                    let yStart = this.yStart > this.yEnd ? this.yEnd : this.yStart;

                    // console.log(width, height);
                    var box = document.createElement('div');
                    box.setAttribute('style', 'position: absolute; display: block; top: ' + yStart + 'px; left: ' + xStart + 'px; width: ' + width + 'px; height: ' + height + 'px; background-color: yellow; opacity: .4');
                    box.className = 'highlight';
                    box.id = 'div' + id;
                    id++;
                    document.getElementById('zoom_area').appendChild(box);
                };
            };
            document.getElementById('sub_container_answer').onmousedown = () => {
                this.xStart = Number(event.clientX) - document.getElementById('sub_container_answer').offsetLeft;
                this.yStart = Number(event.clientY) - document.getElementById('sub_container_answer').offsetTop-50;
                document.getElementById('sub_container_answer').onmouseup = () => {
                    this.xEnd = Number(event.clientX) - document.getElementById('sub_container_answer').offsetLeft;
                    this.yEnd = Number(event.clientY) - document.getElementById('sub_container_answer').offsetTop-50;
                    // console.log(this.xEnd, this.yEnd);
                    let width = this.xEnd - this.xStart < 0 ? this.xStart - this.xEnd : this.xEnd - this.xStart;
                    let height = this.yEnd - this.yStart < 0 ? this.yStart - this.yEnd : this.yEnd - this.yStart;
                    let xStart = this.xStart > this.xEnd ? this.xEnd : this.xStart;
                    let yStart = this.yStart > this.yEnd ? this.yEnd : this.yStart;

                    // console.log(width, height);
                    var box = document.createElement('div');
                    box.setAttribute('style', 'position: absolute; display: block; top: ' + yStart + 'px; left: ' + xStart + 'px; width: ' + width + 'px; height: ' + height + 'px; background-color: yellow; opacity: .4');
                    box.className = 'highlight';
                    box.id = 'divanswer' + id;
                    id++;
                    document.getElementById('sub_container_answer').appendChild(box);
                };
            };
        }
    };
}
