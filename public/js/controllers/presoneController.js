function presoneController() {
    console.log("pass");
    this.slides = [{
        image: '1'
    }, {
        image: '2'
    }, {
        image: '3'
    }, {
        image: '4'
    }, {
        image: '5'
    }, {
        image: '6'
    }, {
        image: '7'
    }, {
        image: '8'
    }, {
        image: '9'
    }, {
        image: '10'
    }];
    index = 0;
    position = 0;
    this.preview = () => {
        if (index > 0) {
            this.value = index + 3;
            if (angular.element(document.querySelector('#b' + this.value))[0].className == "active") {
              this.active = this.value;
              // console.log(this.active);
              angular.element(document.querySelector('#b' + this.value)).removeClass('active');
            }
            position = position - 25;
            this.moveStyle = "margin-left: -" + position + "vw;";
            index--;
            // console.log(index);
            // console.log(position);
        }
    };
    this.next = () => {
        if (index < this.slides.length - 4) {
            angular.element(document.querySelector('#b' + this.active)).addClass('active');
            position = position + 25;
            this.moveStyle = "margin-left: -" + position + "vw;";
            index++;
            // console.log(index);
            // console.log(position);
        }
    };
    this.select = (index) => {
      if (angular.element(document.querySelector('#b' + index))[0].className != "active" && this.nextIndex == index) {
        this.elAdd = angular.element(document.querySelector('#b' + index)).addClass('active');
      } else {
        this.elAdd = angular.element(document.querySelector('#b' + index)).addClass('active');
        this.elRemove = angular.element(document.querySelector('#b' + this.nextIndex)).removeClass('active');
        this.nextIndex = index;
      }this.active = index;
    };
}
