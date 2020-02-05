<template lang="pug">
  main.content
    .container.content__container
      .content__title
        .content__title-text
          span Блок «Работы»
        
      .content__works
        .works__edit
          .edit__title
            span Редактирование Работы

          .edit__content

            .edit__image
              .edit__image--text
                span Перетащите или загрузите для загрузки изображения
              .edit__image--btn
                button.btn-load(type="button" value="Загрузить") Загрузить

            .edit__form
              form.form__tag
                .form__row
                  label.form__block
                    .form__label Название
                    .input
                      input.form__input(type="text" name="name" placeholder="" value="Дизайн сайта для авто салона Porsche")
                .form__row
                  label.form__block
                    .form__label Ссылка
                    .input
                      input.form__input(type="text" name="name" placeholder="" value="https://www.porsche-pulkovo.ru")
                .form__row.form__row--textarea
                  label.form__block
                    .form__label Описание
                    .input
                      textarea.form__input.form__input--textarea(type="text" name="name" placeholder="") Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                .form__row
                  label.form__block
                    .form__label Добавление тэга
                    .input
                      input.form__input(type="text" name="name" placeholder="" value="Jquery, Vue.js, HTML5")

                .edit-tags
                  ul.tags__list
                    li.tags__item
                      .tags__item--name HTML
                      .tags__item--remove
                    li.tags__item
                      .tags__item--name CSS
                      .tags__item--remove
                    li.tags__item
                      .tags__item--name javascript
                      .tags__item--remove
                      
                .form__row-btn  
                  input.form__btn--reset(type="reset" value="Отмена")
                  button.form__btn(type="button" value="Сохранить") Сохранить 




</template>



<script>
export default {
  name: "Works"
};
</script>


<style lang="postcss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import url("../../../styles/mixins.pcss");
@import url("../../../styles/layout/base.pcss");

/* Основная часть */

.content {
  min-height: 974px;
  background: linear-gradient(rgba(255, 250, 255, 0.5), rgba(41, 39, 39, 0.5)),
    url("~images/content/admin/main/bg_main.png") center center no-repeat;
}

.content__title {
  display: flex;
  align-items: center;
  padding: 61px 0px;
}

.content__title-text {
  font-size: 21px;
  font-weight: bold;
  color: #2d3c4e;
  margin-right: 59px;
}

.works__edit {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 775px;
  background-color: #fff;
  box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.4);
  padding: 30px 30px;
  margin-bottom: 30px;
  color: #2d3c4e;
}

.edit__title {
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 25px;
  margin-bottom: 48px;
}

.edit__content {
  display: flex;
  justify-content: space-between;
}

.edit__image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 49%;
  height: 275px;
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;
}

.edit__image--text {
  font-size: 16px;
  font-weight: 600;
  line-height: 2.12;
  text-align: center;
  opacity: 0.5;
  max-width: 230px;
  padding-bottom: 27px;
}

/* Кнопка */

.btn-load {
  width: 181px;
  height: 50px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to top, #ea7400, #f29400);
}

.btn-load:hover {
  background: linear-gradient(to bottom, #d0731b, #dc9322);
  transition: 0.3s;
}

.btn-load:focus {
  box-shadow: 1px 1px 10px 3px lightskyblue;
  transition: 0.3s;
}

.edit__form {
  width: 49%;
}

.form__row {
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;
}

.form__block {
  font-size: 16px;
  font-weight: 600;
  color: #2d3c4e;
}

.form__label {
  opacity: 0.5;
  margin-bottom: 20px;
}

.input {
  width: 100%;
}

.form__input {
  width: 85%;
  font-size: 16px;
  font-weight: 600;
  color: #2d3c4e;
  outline: none;
  border: none;
  background: transparent;
  padding-bottom: 18px;
}

.form__row--textarea {
  border-bottom: 2px solid transparent;
}

.form__input--textarea {
  width: 100%;
  border: 2px solid #ccc;
  line-height: 1.88;
  min-height: 146px;
  resize: none;
  padding: 14px 80px 14px 20px;
}

.edit-tags {
  margin-bottom: 40px;
}

.tags__list {
  display: flex;
}

.tags__item {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #2d3c4e;
  padding: 9px 17px;
  background: #f4f4f4;
  border-radius: 15px;
  margin-right: 9px;
}

.tags__item--name {
  opacity: 0.7;
  margin-right: 9px;
}

.tags__item--remove {
  width: 11px;
  height: 11px;
  background-image: svg-load("remove.svg",fill=#2d3c4e,width=100%, height=100%);
  background-size: 11px 11px;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.form__btn--reset {
  font-size: 16px;
  font-weight: 600;
  color: #2d3c4e;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: 1px solid transparent;
  outline: none;
  margin-right: 59px;
}
.form__btn--reset:hover {
  transform: translateY(-2px);
  transition: 0.3s;
}


.form__btn {
  width: 181px;
  height: 60px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to top, #ea7400, #f29400);
}

.form__btn:hover {
  background: linear-gradient(to bottom, #d0731b, #dc9322);
  transition: 0.3s;
}

.form__btn:focus {
  box-shadow: 1px 1px 10px 3px lightskyblue;
  transition: 0.3s;
}
</style>