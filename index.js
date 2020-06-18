var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    brand: "Vue Mastery",
    inStock: true,
    image: "",
    details: ["80% cotton", "20% polyester", "gender-neutral"],
    variants: [
      {
        id: 1,
        color: "green",
        image:
          "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/D3/E8/65e6f6cf-03ec-4fee-b5de-7456abc0c471.jpg",
      },
      {
        id: 2,
        color: "blue",
        image:
          "https://cdn.lookastic.com/blue-socks/blue-solid-socks-original-731656.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function (image) {
      this.image = image;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
  },
});
