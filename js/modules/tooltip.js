export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);

  }

  onMouseMove(e) {
    this.tooltipBox.style.top = e.pageY + 20 + 'px';
    (e.pageX + 240 > window.innerWidth) ? this.tooltipBox.style.left = e.pageX - 175 + 'px' : this.tooltipBox.style.left = e.pageX + 20 + 'px'
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseOver({ currentTarget }) {
    this.criarToolTipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  criarToolTipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  addToolTipsEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver)
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addToolTipsEvent();
    }
    return this;
  }
}