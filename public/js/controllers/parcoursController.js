function parcoursController() {
  this.cadenas = 'lock icon';
  this.unlock=()=>{
    this.cadenas='unlock icon';
  };
  this.lock=()=>{
    this.cadenas='lock icon';
  };

  this.crayon = 'edit icon';
  this.actif=()=>{
    this.crayon='write icon';
  };
  this.repos=()=>{
    this.crayon='edit icon';
  };
}
