function presoneController() {
    // angular.element(document.querySelector('#b0')).addClass('active pos1');
    this.show = false;
    this.showRecadrage = false;
    this.highlight = false;
    this.includerPres1 = '1';
    this.selectClass = "1";
    this.index = 0;
    this.active = 0;
    this.previewPos = 0;
    this.position = 0;

    // datas for navigation slide
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
        icon: './assets/icon/globe_turquoise.png',
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
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '8_chute-libre-image_small',
        title: 'International',
        icon: './assets/icon/globe_turquoise.png',
        color: 'bleu'
    }, {
        image: '9_Maitre-gims_small',
        title: 'Exercices: Putaclic',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '10_messi_small',
        title: 'Exercices: Putaclic',
        icon: './assets/icon/globe_turquoise.png',
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
        icon: './assets/icon/globe_turquoise.png',
        color: 'bleu',
    }, {
        image: '16_conclusion_small',
        title: 'Conclusion',
        icon: './assets/icon/vrai_faux.png',
        color: 'bleu'
    }];

    // Start offunction for animation true or false
    this.biggerTrueAnswer = () => {
        // console.log(angular.element(document.querySelector('#true_answer'))[0].className);
        if (angular.element(document.querySelector('#true_answer'))[0].className == 'btn-floating btn-large choice') {
            angular.element(document.querySelector('#true_answer')).addClass('bigger');
            angular.element(document.querySelector('#false_answer')).removeClass('bigger');
        } else {
            angular.element(document.querySelector('#true_answer')).removeClass('bigger');
        }
    };

    this.biggerFalseAnswer = () => {
        if (angular.element(document.querySelector('#false_answer'))[0].className == 'btn-floating btn-large choice') {
            angular.element(document.querySelector('#false_answer')).addClass('bigger');
            angular.element(document.querySelector('#true_answer')).removeClass('bigger');
        } else {
            angular.element(document.querySelector('#false_answer')).removeClass('bigger');
        }
    };
    // End fo function for animation true or false
    //
    //   this.highlight = () => {
    //     this.light = true;
    // };

    // next function for navigate inside navigation slide
    this.next = () => {
        var posOne = angular.element(document.querySelector('.pos1'))[0].id;
        posOne = Number(posOne.substr(1, 2));
        if (this.index < this.slides.length - 4) {
            if (this.index + 4 == this.active) {
                angular.element(document.querySelector('#b' + this.active)).addClass('active');
            }
            this.position = this.position + 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index++;
        }
    };

    // preview function for navigate inside navigation slide
    this.preview = () => {
        if (this.index > 0) {
            if (angular.element(document.querySelector('#b' + (this.index + 3)))[0].className == "active") {
                this.active = this.index + 3;
                angular.element(document.querySelector('#b' + this.active)).removeClass('active');
            }
            this.position = this.position - 25;
            this.moveStyle = "margin-left: -" + this.position + "vw;";
            this.index--;
        }
    };

    // select function for show indicator under the picture
    this.select = (i) => {
        angular.element(document.querySelector('#b' + i)).addClass('active');
        angular.element(document.querySelector('#b' + this.previewPos)).removeClass('active');
        this.active = i;
        this.previewPos = i;
        this.selectClass = Math.floor(Math.random() * (4 - 1) + 1);
        // console.log(this.selectClass);
        this.includerPres1 = i + 1;
    };

    // function for move to the next slide
    this.nextVisibleSlide = (i) => {
        this.select(i);
        this.next();
    };

//flip-flop controller
  const getElement = (id) => {
    return angular.element(document.querySelector(id));
  };

  this.flip = () => {
    if(!getElement('#front').hasClass('on-left')) {
      getElement('#front').addClass('on-left');
      getElement('#inner-left').addClass('on-left');
      getElement('#inner-right').addClass('on-right');
    }
    else {
      getElement('#front').removeClass('on-left');
      getElement('#inner-left').removeClass('on-left');
      getElement('#inner-right').removeClass('on-right');
    }
  };
}
