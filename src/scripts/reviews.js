import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    Flickity
  },

  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: "100%",
        cellAlign: 'left'

        // any options from Flickity can be used
      }
    }
  },

  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrayWithImages(data);
  },


  methods: {

    makeArrayWithImages(data) {
      return data.map(elem => {
        const requiredPic = require(`../images/content/reviews/${elem.author_avatar}`);
        elem.author_avatar = requiredPic;
        return elem;
      });
    },

    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  }
});