function presFourController() {
    this.show = false;
    this.showRecadrage = false;
    this.highlight = false;
    this.includerpres4 = '1';
    this.selectClass = "1";
    this.index = 0;
    this.active = 0;
    this.previewPos = 0;
    this.position = 0;
    // this.answerLeParisien = false;
    // this.image20Minutes = true;
    // this.minion = false;
    // datas for navigation slide
    this.slides = [{
        image: '1_twitter_small',
        title: 'France',
        icon: './assets/icon/conv_violet.png',
        color: 'violet'
    }, {
        image: '2_tinder_small',
        title: 'Technologie',
        icon: './assets/icon/conv_orange.png',
        color: 'orang'
    }, {
        image: '3_chien_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '4_lascars_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '5_Djibouti_John_Steinmeyer_small',
        title: 'Exercices: Légendage',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '6_carroussel_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '7_Vancouver_Photo_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '8_Tefal_Femme_small',
        title: '24h en images',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '9_recadrage_small',
        title: 'Exercices: Recadrage',
        icon: './assets/icon/globe_turquoise.png',
        color: 'turquoise'
    }, {
        image: '10_dindon_small',
        title: 'Tendance',
        icon: './assets/icon/heart_pink.png',
        color: 'rose'
    }, {
        image: '11_portrait_small',
        title: 'Portrait',
        icon: './assets/icon/perso_purple.png',
        color: 'violet'
    }, {
        image: '12_hippo_small',
        title: 'Technologie',
        icon: './assets/icon/conv_orange.png',
        color: 'orang'
    }, {
        image: '13_conclusion_small',
        title: 'Technologie',
        icon: './assets/icon/conv_orange.png',
        color: 'orang'
    }, {
        image: '14_minions_small',
        title: 'Culture',
        icon: './assets/icon/new_green.png',
        color: 'vert'
    }, {
        image: '15_zlatan_small',
        title: 'Vidéo',
        icon: './assets/icon/video_turquoise.png',
        color: 'turquoise'
    }, {
        image: '16_conclusion_small',
        title: 'Conclusion',
        icon: './assets/icon/vrai_faux.png',
        color: 'bleu'
    }];

    // Start offunction for animation true or false
    const getElement = (id) => {
        return angular.element(document.querySelector(id));
    };
    this.biggerTrueAnswer = (n) => {
        if (getElement('#true_answer' + n)[0].className == 'choice') {
            getElement('#true_answer' + n).addClass('bigger');
            getElement('#false_answer' + n).removeClass('bigger');
        } else {
            getElement('#true_answer').removeClass('bigger');
        }
    };
    this.biggerFalseAnswer = (n) => {
        if (getElement('#false_answer' + n)[0].className == 'choice') {
            getElement('#false_answer' + n).addClass('bigger');
            getElement('#true_answer' + n).removeClass('bigger');
        } else {
            getElement('#false_answer' + n).removeClass('bigger');
        }
    };
    // End fo function for animation true or false

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
        this.includerpres4 = i + 1;
    };

    // function for move to the next slide
    this.nextVisibleSlide = (i) => {
        this.select(i);
        this.next();
    };

    //flip-flop controller
    this.flip = () => {
        if (!getElement('#front').hasClass('on-left')) {
            getElement('#front').addClass('on-left');
            getElement('#inner-left').addClass('on-left');
            getElement('#inner-right').addClass('on-right');
            getElement('#logo_minion').removeClass('contractedUp');
            getElement('#logo_minion').addClass('expandDown');
            this.minion = true;
        } else {
            getElement('#logo_minion').removeClass('expandDown');
            getElement('#logo_minion').addClass('contractedUp');
            getElement('#front').removeClass('on-left');
            getElement('#inner-left').removeClass('on-left');
            getElement('#inner-right').removeClass('on-right');
            this.minion = false;
        }
    };
}
