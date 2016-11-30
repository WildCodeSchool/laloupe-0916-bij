function presoneController() {
  console.log("pass");
  this.slides = [
    {
      image: '1'
    },
    {
      image: '2'
    },
    {
      image: '3'
    },
    {
      image: '4'
    },
    {
      image: '5'
    },
    {
      image: '6'
    },
    {
      image: '7'
    },
    {
      image: '8'
    },
    {
      image: '9'
    },
    {
      image: '10'
    }
  ];
  index = 0;
  this.preview = () => {

    this.moveStyle = "margin-left: 25vw;";
  };

  this.next = () => {
    this.selected = angular.element(document.querySelector('#'+index)).addClass('selected');
    console.log(this.selected);
    this.moveStyle = "margin-left: -25vw;";
    index++;

  };
}
