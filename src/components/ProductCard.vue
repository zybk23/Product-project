<template lang="">
  <div v-for="item in filteredCard" :key="item.id" class="cart">
    <div class="cart-image">
      <img :src="item.image" />
      <span v-if="item.showInStock" class="activity-info"
        >Last {{ item.inStock }} stock</span
      >
    </div>
    <div class="cart-info">
      <p>{{ item.name }}</p>
      <span>${{ item.price }}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ProductCard",
  props: ["filterValue", "sortValue"],
  computed: {
    ...mapState(["title", "products"]),
    filteredCard: function() {
      return this.products.filter((item) => {
        if (this.filterValue == 0 && this.sortValue == 0) {
          return item;
        } else {
          return (
            item.productId == this.filterValue ||
            item.sortedId == this.sortValue
          );
        }
      });
    },
  },
  filters: {},
};
</script>
<style lang="scss">
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #444;
  width: 20%;
  height: 400px;
  margin-top: 40px;
  margin-right: 20px;
  position: relative;
  overflow: hidden;

  .cart-image {
    width: 100%;
    height: 300px;

    .activity-info {
      position: absolute;
      background-color: orange;
      text-align: center;
      left: 0;
      width: 140px;
      top: 0;
      margin-top: 19px;
      margin-left: -43px;
      padding: 15px;
      transform: rotate(-45deg);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .cart-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      color: #444;
    }
  }
}
</style>
