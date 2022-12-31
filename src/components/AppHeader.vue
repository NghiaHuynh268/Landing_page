<template lang="">
  <header class="header">
    <div class="header__wrap flex container">
      <div class="header__left flex">
        <p class="header__brand">silika</p>
        <p class="header--highlight">We're Hiring</p>
      </div>
      <div class="header__mid flex">
        <a
          v-for="item in dataHeader"
          :key="item.id"
          :href="item.link"
          class="header--opt"
          >{{ item.name }}</a
        >
      </div>
      <div class="header__right flex">
        <button class="button--login">login</button>
        <button class="button--start button--start">Get Started</button>
      </div>
    </div>
  </header>
</template>

<script>
import { DATA_HEADER } from "@/resources/data";
export default {
  data() {
    return {
      dataHeader: DATA_HEADER,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/common.scss";
.header {
  position: absolute;
  width: 100%;
  padding: 10px 0;
  &__wrap {
    justify-content: space-between;
  }
  &__brand {
    font-weight: 700;
    font-size: 40px;
    line-height: 71px;
    color: $color--title;
    margin-right: 6px;
  }
  &--highlight {
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 0.02em;
    color: $color--base;
    padding: 8px 11px;
    background-color: $color--red;
    border-radius: 5px;
  }
  &--opt {
    font-weight: 500;
    font-size: 16px;
    color: $color--title;
    margin-right: 24px;
    text-decoration: none;
    transition: all 0.3s;
    &:hover {
      scale: 1.1;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__right {
    .button--login {
      font-weight: 600;
      font-size: 16px;
      color: $color--title;
      margin-right: 16px;
      background-color: transparent;
      cursor: pointer;
      border: none;
      transition: all 0.3s;
      &:hover {
        scale: 1.1;
      }
    }
  }
}
</style>
