class listResto extends HTMLElement {
    constructor() {
      super();
  
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <h1 class="explore-resto">Explore Restaurant</h1>
        <div class="restaurants" id="resto-item"></div>
          `;
    }
  }
  
  if (!customElements.get("list-resto")) {
    customElements.define("list-resto", listResto);
  }
  