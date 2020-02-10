<template lang="pug">
  nav.nav
    .container.nav__container
      ul.nav__list
        li.nav__item(v-for="tab in tabs")
          router-link(
            :data-text="tab.title" 
            :to="tab.href"
            exact-active-class="active"
          ).nav__link




          

      //- ul.nav__list
      //-   li.nav__item.active
      //-     a.nav__link(href="/") Обо мне
      //-   li.nav__item
      //-     a.nav__link(href="#/works") Работы
      //-   li.nav__item
      //-     a.nav__link(href="#/reviews") Отзывы
</template>


<script>
export default {
  data () {
    return {
      tabs: [
        { title: "Обо мне", href: "/"},
        { title: "Отзывы", href: "/works"},
        { title: "Работы", href: "/reviews"}
      ]
    };
  },

  // name: 'Navigation'
  

};
</script>


<style lang="postcss" scoped>
/* @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css"; */
@import url("../../styles/mixins.pcss");
/* @import url("../../styles/layout/base.pcss"); */

/* Навигация  */

 .nav {
  min-height: 77px;
  max-width: 300px;
  width: 100%;
}



.nav__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

   @include phones {
    justify-content: center;
  }
}

.nav__item {
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: normal;
  color: #2d3c4e;

  @include phones {
    /* padding: 30px 18px; */
    font-size: 14px;
  }
}


.nav__link {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-bottom: 3px solid transparent;
  
  &:before {
    content: attr(data-text);
  }

}


.nav__link:hover, 
.nav__link.active {
  color: #ff9a00;
  font-weight: 600;
  border-bottom: 3px solid #ff9a00;
}



</style>