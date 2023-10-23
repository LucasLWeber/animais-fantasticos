export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  if (!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick)); // por ser um função assíncrona e ser a última coisa que o dom realiza, setar um time out aqui, funciona perfeitamente, pois ele realiza todas as outras funções primeiro para depois adicionar o evento de clique outside
    });
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}