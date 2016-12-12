function presoneController() {
    // angular.element(document.querySelector('#b0')).addClass('active pos1');
    this.show = false;
    this.includerPres1 = '1';
    this.active = 0;
    this.selectClass = "1";
    this.light = false;
    this.slides = [{
        image: '1_chien_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '2_lascars_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '3_carroussel_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '4_Djibouti_John_Steinmeyer_small',
        title: 'Exercices: Légendage',
        icon: './assets/icon/exe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '5_Vancouver_Photo_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '6_Tefal_Femme_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '7_recadrage_small',
        title: 'Exercices: Recadrage',
        icon: './assets/icon/exe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '8_chute-libre-image_small',
        title: 'International',
        icon: './assets/icon/globe_blue.png',
        color: 'bleu'
    }, {
        image: '9_Maitre-gims_small',
        title: 'Exercices: Putaclic',
        icon: './assets/icon/exe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '10_messi_small',
        title: 'Exercices: Putaclic',
        icon: './assets/icon/exe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '11_minions_small',
        title: 'Culture',
        icon: './assets/icon/new_green.png',
        color: 'vert'
    }, {
        image: '12_zlatan_small',
        title: 'Vidéo',
        icon: './assets/icon/video_turquoise.png',
        color: 'turquoise'
    }, {
        image: '13_tinder_small',
        title: 'Technologie',
        icon: './assets/icon/conv_orange.png',
        color: 'orang'
    }, {
        image: '14_twitter_small',
        title: 'France',
        icon: './assets/icon/conv_violet.png',
        color: 'violet'
    }, {
        image: '15_Graph_small',
        title: 'International',
        icon: './assets/icon/globe_blue.png',
        color: 'bleu',
    }, {
        image: '16_conclusion_small',
        title: 'Conclusion',
        icon: './assets/icon/end_turquoise.png',
        color: 'turquoise'
    }];
    // this.index = 0;
    // this.active = 0;
    // this.previewPos = 0;
    // this.position = 0;
    // this.preview = () => {
    //     if (this.index > 0) {
    //         this.value = this.index + 3;
    //         if (angular.element(document.querySelector('#b' + this.value))[0].className == "active") {
    //             this.active = this.value;
    //             // console.log(this.active);
    //             angular.element(document.querySelector('#b' + this.active)).removeClass('active');
    //         }
    //         this.position = this.position - 25;
    //         this.moveStyle = "margin-left: -" + this.position + "vw;";
    //         this.previewPos = this.index;
    //         this.index--;
    //     }
    // };
    // this.next = () => {
    //     if (this.index < this.slides.length - 4) {
    //         if (this.index + 4 == this.active) {
    //             angular.element(document.querySelector('#b' + this.active)).addClass('active');
    //         }
    //         this.position = this.position + 25;
    //         this.moveStyle = "margin-left: -" + this.position + "vw;";
    //         this.previewPos = this.index;
    //         this.index++;
    //     }
    // };
    // this.select = (index) => {
    //   this.previewPos = this.active;
    //   if (angular.element(document.querySelector('#b' + index))[0].className != "active" && this.active == index) {
    //     angular.element(document.querySelector('#b' + index)).addClass('active');
    //     this.active = index;
    //   } else {
    //     angular.element(document.querySelector('#b' + index)).addClass('active');
    //     angular.element(document.querySelector('#b' + this.previewPos)).removeClass('active');
    //     this.active = index;
    //   }
    //   this.selectClass = Math.floor( Math.random() * (4 - 1) + 1 );
    //   this.includerPres1 =  index+1;
    // };
    // this.nextSlide = (i) => {
    //   this.includerPres1++;
    //   console.log(i-1 > this.previewPos);
    //   if (i % 4 === 0 && (i-1) > this.previewPos) {
    //     console.log(i, angular.element(document.querySelector('#b' + (i - 1))));
    //     this.index = this.index + 4;
    //     this.position = this.position + 100;
    //     this.moveStyle = "margin-left: -" + this.position + "vw;";
    //     angular.element(document.querySelector('#b' + i)).addClass('active');
    //     angular.element(document.querySelector('#b' + this.active)).removeClass('active');
    //     this.active = this.index;
    //   } else {
    //     angular.element(document.querySelector('#b' + i)).addClass('active');
    //     angular.element(document.querySelector('#b' + this.active)).removeClass('active');
    //     this.active = i;
    //   }
    // };

    this.biggerTrueAnswer = () => {
      console.log(angular.element(document.querySelector('#true_answer'))[0].className);
      if (angular.element(document.querySelector('#true_answer'))[0].className == 'chip choice') {
        angular.element(document.querySelector('#true_answer')).addClass('bigger');
        angular.element(document.querySelector('#false_answer')).removeClass('bigger');
      }
      else {
        angular.element(document.querySelector('#true_answer')).removeClass('bigger');
      }
    };

      this.biggerFalseAnswer = () => {
      if (angular.element(document.querySelector('#false_answer'))[0].className == 'chip choice') {
        angular.element(document.querySelector('#false_answer')).addClass('bigger');
        angular.element(document.querySelector('#true_answer')).removeClass('bigger');
      }
      else {
        angular.element(document.querySelector('#false_answer')).removeClass('bigger');
      }
    };
      this.highlight = () => {
        console.log("pass");
        this.light = true;
    };

    this.index = 0;
    this.active = 0;
    this.previewPos = 0;
    this.position = 0;

    this.next = () => {
      if (this.index < this.slides.length - 4) {
        if (this.index + 4 == this.active) {
          angular.element(document.querySelector('#b' + this.active)).addClass('active');
        }
        this.position = this.position + 25;
        this.moveStyle = "margin-left: -" + this.position + "vw;";
        this.previewPos = this.index;
        this.index++;
        angular.element(document.querySelector('#b' + (this.index))).addClass('pos1');
        angular.element(document.querySelector('#b' + this.previewPos)).removeClass('pos1');
      }
      console.log("next preview:" + this.previewPos, "next index:" + this.index, "next active:" + this.active);
    };
    this.preview = () => {
      if (this.index > 0) {
        if (angular.element(document.querySelector('#b' + (this.index + 3)))[0].className == "active") {
          this.active = this.index + 3;
          angular.element(document.querySelector('#b' + this.active)).removeClass('active');
        }
        this.position = this.position - 25;
        this.moveStyle = "margin-left: -" + this.position + "vw;";
        this.previewPos = this.active;
        this.index--;
        angular.element(document.querySelector('#b' + (this.index))).addClass('pos1');
        angular.element(document.querySelector('#b' + this.previewPos)).removeClass('pos1');
      }
      console.log("preview preview:" + this.previewPos, "preview index:" + this.index, "preview active:" + this.active);
    };
    this.select = (i) => {
      console.log(this.active);
        if (angular.element(document.querySelector('#b' + i))[0].className != "active" && this.active == i) {
          angular.element(document.querySelector('#b' + i)).addClass('active');
          this.active = i;
        } else {
          angular.element(document.querySelector('#b' + i)).addClass('active');
          angular.element(document.querySelector('#b' + this.previewPos)).removeClass('active');
          this.active = i;
          this.previewPos = this.active;

          this.index = i;
        }
        this.selectClass = Math.floor( Math.random() * (4 - 1) + 1 );
        this.includerPres1 =  i + 1;
        console.log("select preview:" + this.previewPos, "select index:" + this.index, "select active:" + this.active, "select i:" + i);

    };
    this.nextVisibleSlide = (i) => {
        var posOne = angular.element(document.querySelector('.pos1'))[0].id;
        posOne = Number(posOne.substr(1, 2));
        this.includerPres1++;
        console.log("slide preview:" + this.previewPos, "slide index:" + this.index, "slide active:" + this.active, "slide i:" + i);
          if ((i - posOne) == 4) {
            console.log("decalage");
            // if (this.index + 4 == this.active)
              angular.element(document.querySelector('#b' + i)).addClass('pos1');
              this.position = this.position + 100;
              this.moveStyle = "margin-left: -" + this.position + "vw;";
            }
              console.log("pas decalage");
              angular.element(document.querySelector('#b' + i)).addClass('active');
              angular.element(document.querySelector('#b' + this.previewPos)).removeClass('active');
              // this.position = this.position + 25;
              // this.moveStyle = "margin-left: -" + this.position + "vw;";
        this.active = i;
        this.previewPos = i;
        this.index = i;
        console.log("slide preview:" + this.previewPos, "slide index:" + this.index, "slide active:" + this.active, "slide i:" + i);


    };
}
