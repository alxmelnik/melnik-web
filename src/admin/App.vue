
<template lang="pug">
.wrapper.admin-wrapper
  
  Head
  Navigation

  .maincontent
    router-view
   
                    
</template>

<script>
import Login from "./components/pages/login";

import About from "./components/pages/about";
import Works from "./components/pages/works";
import Reviews from "./components/pages/reviews";

export default {
  components: {
    Login,
    About,
    Works,
    Reviews,

    Head: () => import("./components/Head"),
    Navigation: () => import("./components/Navigation")
    
  }
};

</script>


<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import url("../styles/mixins.pcss");
@import url("../styles/layout/base.pcss");

.container {
  margin: 0 auto;
  max-width: 1080px;
  width: 95%;
  
  @include phones {
    width: 85%;
  }
}





</style>