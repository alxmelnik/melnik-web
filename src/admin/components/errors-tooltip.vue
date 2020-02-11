<template lang="pug">
  .input__error-tooltip-container {{errorText}}
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: "Какая-то ошибка"
    }
  }
};
</script>


<style lang="postcss" scoped>
.input__error-tooltip-container {
  z-index: 100;
  background: #cd1515;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  white-space: nowrap;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: #cd1515;
    border-bottom-width: 7px;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>