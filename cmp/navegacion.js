class Cnavegacion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#sobre-mi">Sobre mí</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#contacto">Contacto</a></li>
      </ul>`;
  }
}

customElements.define(
  "c-navegacion", Cnavegacion);