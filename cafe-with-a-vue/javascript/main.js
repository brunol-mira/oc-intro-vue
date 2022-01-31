let app = new Vue({
    el: '#app',
    data: {
        address: "18 avenue du Beurre, Paris, France",
        email: "hello@cafewithavue.bakery",
        phone: "01 88 88 88 88",
        restaurantName: "La belle vue",
        showModal: false,
        favColor: 'blue',
        shoppingCart: [
            { label: 'Pommes', cost: 6 },
            { label: 'Bananes', cost: 2 },
            { label: 'Noix de coco', cost: 8 }
        ],
        apiResponse: [
            { name: 'GitHub',  url: 'https://www.github.com' },
            { name: 'Twitter', url: 'https://www.twitter.com' },
            { name: 'Netlify', url: 'https://www.netlify.com' }
        ],
    },
    methods: {
        showColor() {
            console.log(this.favColor);
            alert(this.favColor);
        },
        changeColor(){
            this.favColor = document.getElementById('change-color').value;
        }
    },
    computed: {
        copyRight() {
            const currentYear = new Date().getFullYear();

            return `Copyright - ${this.restaurantName} ${currentYear}`;
        },
        total() {
            let total = 0;

            this.shoppingCart.forEach(item => {
                total += item.cost
            })

            return total
        }
    }
})