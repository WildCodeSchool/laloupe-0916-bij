function parcoursController() {
  this.unlock=(value)=>{
    angular.element(document.querySelector('#padlock'+value)).removeClass('lock icon');
    angular.element(document.querySelector('#padlock'+value)).addClass('unlock icon');
  };
  this.lock=(value)=>{
    angular.element(document.querySelector('#padlock'+value)).removeClass('unlock icon');
    angular.element(document.querySelector('#padlock'+value)).addClass('lock icon');
  };

  this.crayon = 'edit icon';
  this.actif=()=>{
    this.crayon='write icon';
  };
  this.repos=()=>{
    this.crayon='edit icon';
  };
}
