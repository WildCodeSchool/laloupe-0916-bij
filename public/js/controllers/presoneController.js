function presoneController() {
    this.includerPres1 = 'views/pres1/views/sheet1.html';
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
    this.index = 0;
    this.position = 0;
    this.preview = () => {
        if (this.index > 0) {
            this.value = this.index + 3;
            if (angular.element(document.querySelector('#b' + this.value))[0].className == "active") {
              this.active = this.value;
              // console.log(this.active);
              angular.element(document.querySelector('#b' + this.value)).removeClass('active');
            }
            this.position = this.position - 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index--;
            // console.log(this.index);
            // console.log(this.position);
        }
    };
    this.next = () => {
        if (this.index < this.slides.length - 4) {
            angular.element(document.querySelector('#b' + this.active)).addClass('active');
            this.position = this.position + 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index++;
            // console.log(this.index);
            // console.log(this.position);
        }
    };
    this.select = (index) => {
      if (angular.element(document.querySelector('#b' + index))[0].className != "active" && this.nextIndex == index) {
        this.elAdd = angular.element(document.querySelector('#b' + index)).addClass('active');
      } else {
        this.elAdd = angular.element(document.querySelector('#b' + index)).addClass('active');
        this.elRemove = angular.element(document.querySelector('#b' + this.nextIndex)).removeClass('active');
        this.nextIndex = index;
      }
      this.active = index;
      this.includerPres1 = 'views/pres1/views/sheet' + index + '.html';

    };
}
