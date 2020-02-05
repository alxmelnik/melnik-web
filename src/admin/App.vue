
<template lang="pug">
.wrapper.admin-wrapper
  Head
 
  .maincontent
    Navigation
    About

  .maincontent
    Works
                    
</template>

<script>
import Head from "./components/Head";
import Navigation from "./components/Navigation";
import About from "./components/pages/about";
import Works from "./components/pages/works";

export default {
  components: {
    Head,
    Navigation,
    About,
    Works

    
  }
};

</script>




<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import url("../styles/mixins.pcss");
@import url("../styles/layout/base.pcss");


</style>