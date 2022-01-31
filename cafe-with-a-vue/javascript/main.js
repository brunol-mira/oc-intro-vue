let app = new Vue({
    el: '#app',
    data: {
        address: "18 avenue du Beurre, Paris, France",
        email: "hello@cafewithavue.bakery",
        phone: "01 88 88 88 88",
        restaurantName: "La belle vue"
    },
    methods: {
    },
    computed: {
        copyRight() {
            const currentYear = new Date().getFullYear();

            return `Copyright - ${this.restaurantName} ${currentYear}`;
        },
    }
})