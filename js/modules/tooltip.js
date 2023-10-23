export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + 'px';
      this.tooltipBox.style.left = e.pageX + 20 + 'px';
    },
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave); // remove o evento dos eventos associados ao elemento
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  }

  function onMouseOver() {
    const tooltipBox = criarToolTipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  function criarToolTipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  if (tooltips) {
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', onMouseOver)
    });
  }
}