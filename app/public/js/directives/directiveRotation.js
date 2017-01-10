function directiveRotation() {
    return {
        restrict: 'AE',
        link: function() {
            document.getElementById("img_grey").onmousedown = () => {
                var rotation = document.getElementById("img_grey");
                if (rotation.hasAttribute('style')) {
                    rotation.removeAttribute('style');
                } else {
                    rotation.setAttribute('style', 'transform: rotateX(180deg); -webkit-transform: rotateX(180deg); -ms-transform: rotateX(180deg);');
                }
            };
        }
    };
}
