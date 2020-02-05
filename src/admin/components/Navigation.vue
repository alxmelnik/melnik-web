<template lang="pug">
  nav.nav
    .container.nav__container
      ul.nav__list
        li.nav__item.active
          a.nav__link(href="#") Обо мне
        li.nav__item
          a.nav__link(href="#") Работы
        li.nav__item
          a.nav__link(href="#") Отзывы
</template>


<script>
export default {
  name: 'Navigation'
};
</script>


<style lang="postcss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import url("../../styles/mixins.pcss");
@import url("../../styles/layout/base.pcss");

/* Навигация  */

 .nav {
  min-height: 77px;
}

.nav__list {
  display: flex;
  align-items: center;
}

.nav__item {
  padding: 30px 28px;
  font-size: 16px;
  font-weight: normal;
  color: #2d3c4e;
  border-bottom: 3px solid transparent;
}

.nav__item.active {
  color: #ff9a00;
  font-weight: 600;
  border-bottom: 3px solid #ff9a00;
}



</style>