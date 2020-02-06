<template lang="pug">
   header.head
    .container.head__container
      .head__user-avatar
        img(src="~images/content/admin/head/user_am.jpg" alt="аватар" class="head__user-pic")
      .head__content
        .head__user-name 
          span Александр Мельник     
        .head__title
          span Панель администрирования
        .head__exit
          a.head__exit--link(href="#") Выйти

</template>


<script>
export default {
  name: "Head"
};
</script>


<style lang="postcss" scoped>
/* @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css"; */
@import url("../../styles/mixins.pcss");
/* @import url("../../styles/layout/base.pcss"); */

.head {
  min-height: 80px;
  background: linear-gradient(to top, #3e3e59, #454573);
  display: flex;
  align-items: center;
  color: #fff;
}

.head__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.head__user-avatar {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  @include phones {
    margin-right: 20px;
  }
}

.head__user-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.head__content {
  display: flex;
  align-items: center;
  flex: 1;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.head__user-name {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.89;
  margin-right: 28px;

  @include phones {
    font-size: 16px;
  }
}

.head__title {
  font-size: 14px;
  font-weight: normal;
  opacity: 0.5;
  line-height: 2.43;

  @include phones {
    display: none;
  }
}

.head__exit {
  margin-left: auto;
  @include phones {
    margin-left: 0;
  }
}

.head__exit--link {
  font-size: 16px;
  font-weight: normal;
  opacity: 0.7;
  line-height: 1.5;
  text-decoration: underline;

  @include phones {
    font-size: 14px;
  }
}
</style>