const DetailResto = {
    async render() {
        return `
        <h1>Detail Resto</h1>
        <div id="detail-resto"></div>
        `;
    },
    async afterRender() {
        // const id = this.getAttribute('data-id');
        // const response = await fetch(`https://restaurant-api.dicoding.dev/detail/:id`);
        // const resto = await response.json();
        // const detailResto = document.getElementById('detail-resto');
    }

};

export default DetailResto;