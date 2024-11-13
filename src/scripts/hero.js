class heroContent extends HTMLElement {
    constructor() {
      super();
  
      this.render();
    }
  
    render() {
      this.innerHTML = `
          <img
          src="images/heros/hero-image_2.jpg"
          alt="Restaurant"
          class="heroImage"
        />
        <div class="hero-text">
          <h1>Welcome to Our Restaurant Catalog</h1>
          <span>Discover the best dining experiences.</span>
        </div>
          `;
    }
  }
  
  if (!customElements.get("hero-content")) {
    customElements.define("hero-content", heroContent);
  }
  