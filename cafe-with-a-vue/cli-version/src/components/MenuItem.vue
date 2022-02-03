<script>
export default {
	name: "MenuItem",
	props: ["addToShoppingCart", "image", "inStock", "name", "quantity", "price"],

  data() {
    return {
      onSale: false
    }
  },

  computed: {
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2)
      }

      return this.price;
    },
  },

  beforeMount() {
    const currentDay = new Date().getDay();

    if (currentDay % 2 === 0) {
      this.onSale = true;
    }
  },
}
</script>

<template>
	<div class="menu-item">
		<img class="menu-item__image" :src="image.source" :alt="image.alt" />
		<div>
			<h3>{{ name }}</h3>
			<p v-if="inStock">En stock</p>
			<p v-else>En rupture de stock</p>
      <p>Prix : {{ generatedPrice }}</p>
			<div>
				<label for="add-item-quantity">Quantité : {{ quantity }}</label>
				<input v-model.number="quantity" id="add-item-quantity" type="number" />
<!--				<button :class="$style.button" @click="addToShoppingCart(quantity)">-->
<!--					Ajouter au panier-->
<!--				</button>-->
        <button class="button" @click="addToShoppingCart(quantity)">
          Ajouter au panier
        </button>
			</div>
		</div>
	</div>
</template>

<!--<style module>-->
<!--.button {-->
<!--  background-color: blue;-->
<!--  color: white;-->
<!--  border-radius: 10px;-->
<!--}-->
<!--</style>-->

<style scoped>

.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.button {
  background-color: blue;
  color: white;
  border-radius: 10px;
}

.menu-item__image {
  max-width: 300px;
}
</style>
