function presoneController() {
    angular.element(document.querySelector('#b0')).addClass('active');
    this.show = false;
    this.includerPres1 = '1';
    this.active = 0;
    this.selectClass = "1";
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
      if (angular.element(document.querySelector('#b' + index))[0].className != "active" && this.active == index) {
        angular.element(document.querySelector('#b' + index)).addClass('active');
      } else {
        angular.element(document.querySelector('#b' + index)).addClass('active');
        angular.element(document.querySelector('#b' + this.active)).removeClass('active');
        this.active = index;
      }
      this.selectClass = Math.floor( Math.random() * (4 - 1) + 1 );
      this.active = index;
      this.includerPres1 =  index+1;
    };

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
}
