<template>
  <div class="container">
    <div class="product-header">
      <h2>Dummy Store!</h2>

      <div class="filtered-area">
        <div class="filter-selection">
          <span>Filter by:</span>
          <select v-model="filterValue">
            <option :value="0">all</option>
            <option
              v-for="filter in filteredBy"
              :value="filter.id"
              :key="`${filter.id}`"
              >{{ filter.name }}</option
            >
          </select>
        </div>
        <div class="filter-selection">
          <span>Sort by:</span>
          <select v-model="sortValue">
            <option :value="0">all</option>
            <option
              v-for="sort in sortedBy"
              :value="sort.id"
              :key="`${sort.id}`"
              >{{ sort.name }}</option
            >
          </select>
        </div>
      </div>
    </div>
    <div class="product-card">
      <ProductCard
        v-bind:filterValue="filterValue"
        v-bind:sortValue="sortValue"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard";
export default {
  name: "App",
  props: [""],
  components: {
    ProductCard,
  },
  data() {
    return {
      filterValue: "0",
      sortValue: "0",
      filteredBy: [
        {
          id: 1,
          name: "All Jacket",
        },
        {
          id: 2,
          name: "All Shoes",
        },
        {
          id: 3,
          name: "All Watches",
        },
      ],
      sortedBy: [
        {
          id: 1,
          name: "featured",
        },
        {
          id: 2,
          name: "price",
        },
        {
          id: 3,
          name: "season",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.container {
  padding: 60px;

  .product-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .filtered-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .filter-selection {
        display: flex;
        flex-direction: column;
        &:nth-child(2) {
          margin-left: 20px;
        }
      }
    }
  }

  .product-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
}

.main {
  padding-top: 40px;
}
</style>
