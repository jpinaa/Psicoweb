class Cnavegacion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
      <li><a href="index.html">Inicio</a></li>
      <li><a href="#sobre-mi">Mi cuenta</a></li>
      <li><a href="#servicios">Terapeutas</a></li>
      <li><a href="#contacto">Pacientes</a></li>
      </ul>`;
  }
}

customElements.define(
  "c-navegacion", Cnavegacion);