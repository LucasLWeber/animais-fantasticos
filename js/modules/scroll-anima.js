export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map(section => {
      return {
        element: section,
        offset: Math.floor(section.offsetTop - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach(item => {
      if (window.scrollY > item.offset) {
        item.element.classList.add('ativo');
      }
      else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop(){
    window.removeEventListener('scroll', this.checkDistance);
  }
}