function parcoursController() {

    this.parcoursService = parcoursService;
    this.load();
  load() {
    this.parcoursService.gatAll().then((res) => {
      this.parcourss=res.data;
    });
  }
}
