import outsideClick from './outside-click.js';
export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    })
  })
  function handleClick(e) {
    e.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }
}