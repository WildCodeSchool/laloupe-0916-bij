function directiveRotation() {
    return {
        restrict: 'A',
        link: function() {
                document.getElementById("zoom").onmousedown = () => {
                  var rotation = document.getElementById("zoom_sur");
                  if (rotation.hasAttribute('style') ) {
                    rotation.removeAttribute('style');
                  } else {
                    rotation.setAttribute('style', 'transform: rotateX(180deg); -webkit-transform: rotateX(180deg); -ms-transform: rotateX(180deg);');
                  }
                };

        }
    };
}
