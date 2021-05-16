import { createStore } from "vuex";

export default createStore({
  state: {
    title: "Taha Zeybek Vuex State",
    products: [
      {
        id: 1,
        image:
          "https://static.intersport.com.tr/uploads/resources/213814/varilite_down_mont_turuncu_dz1392_01_laydown-huge.jpg",
        name: "Dummy Jacket",
        price: "199,99",
        showInStock: true,
        inStock: 5,
        productId: 1,
        sortedId: 1,
      },
      {
        id: 2,
        image:
          "https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dwf0f6ce7f/content/seasonal-content/homepage/2021/02/endorphinshift-onHOVER-d.jpg",
        name: "Dummy shoe",
        price: "199,99",
        showInStock: false,
        inStock: 15,
        productId: 2,
        sortedId: 1,
      },
      {
        id: 3,
        image: "https://i8.amplience.net/i/hotter/GRAVYPWDRBLU-NB",
        name: "Dummy shoe",
        price: "199,99",
        showInStock: true,
        inStock: 25,
        productId: 2,
        sortedId: 2,
      },
      {
        id: 4,
        image:
          "http://www.tekemspor.com/Uploads/UrunResimleri/buyuk/puma-alpha-aop-hooded-jacket-tr-b--coc-362388.jpg",
        name: "Dummy Jacket",
        price: "199,99",
        showInStock: false,
        inStock: 6,
        productId: 1,
        sortedId: 3,
      },
      {
        id: 5,
        image:
          "https://static.intersport.com.tr/uploads/resources/213814/varilite_down_mont_turuncu_dz1392_01_laydown-huge.jpg",
        name: "Dummy Jacket",
        price: "199,99",
        showInStock: true,
        inStock: 8,
        productId: 1,
        sortedId: 3,
      },
      {
        id: 6,
        image:
          "https://static.shiftdelete.net/wp-content/uploads/2020/09/apple-watch-series-6-vs-watch-se-1000-liraya-deger-mi-SDN-Kapak.jpg",
        name: "Dummy shoe",
        price: "199,99",
        showInStock: false,
        inStock: 50,
        productId: 3,
        sortedId: 2,
      },
      {
        id: 7,
        image: "https://i8.amplience.net/i/hotter/GRAVYPWDRBLU-NB",
        name: "Dummy shoe",
        price: "199,99",
        showInStock: true,
        inStock: 42,
        productId: 2,
        sortedId: 2,
      },
      {
        id: 8,
        image:
          "https://s.turkcell.com.tr/SiteAssets/Cihaz/aksesuar/Apple/watch-series-6-gps-40mm/cg/1a.png",
        name: "Dummy Watch",
        price: "199,99",
        showInStock: false,
        inStock: 36,
        productId: 3,
        sortedId: 1,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
