function presoneController() {
    this.includerPres1 = '1';
    this.slides = [{
        image: '1', title: '24h en images', logo:''
    }, {
        image: '2', title: '24h en images', logo:''
    }, {
        image: '3', title: '24h en images', logo:''
    }, {
        image: '4', title: 'Exercices: Légendage', logo:''
    }, {
        image: '5', title: '24h en images', logo:''
    }, {
        image: '6', title: '24h en images', logo:''
    }, {
        image: '7', title: 'Exercices: Recadrage', logo:''
    }, {
        image: '8', title: 'International', logo:''
    }, {
        image: '9', title: 'Exercices: Putaclic', logo:''
    }, {
        image: '10', title: 'Exercices: Putaclic', logo:''
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
        }
    };
    this.next = () => {
        if (this.index < this.slides.length - 4) {
            if (this.index + 4 == this.active) {
              angular.element(document.querySelector('#b' + this.active)).addClass('active');
            }
            this.position = this.position + 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index++;
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
      this.includerPres1 =  index+1;
      console.log(index+1);
      console.log(this.includerPres1);
    };
}
