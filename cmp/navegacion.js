class Cnavegacion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
      <li><a href="index.html">Inicio</a></li>
      <li><a href="micuenta.html">Mi cuenta</a></li>
      <li><a href="terapeutas.html">Terapeutas</a></li>
      <li><a href="#contacto">Pacientes</a></li>
      <li><a href="#contacto">Vinculación</a></li>
      </ul>`;
  }
}

customElements.define(
  "c-navegacion", Cnavegacion);