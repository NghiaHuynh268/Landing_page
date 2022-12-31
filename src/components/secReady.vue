<template>
  <div class="section container">
    <h2 class="section__title sec__title">Ready to level-up?</h2>
    <h4 class="section__subtitle">
      Id ipsum amet nibh dolor mi ac diam pellentesque.
    </h4>
    <button class="section__btn button--start">Get Started - It's Free</button>
    <div class="group--notice flex">
      <div class="item flex">
        <img src="../assets/images/check_icon.png" alt="" />
        <p class="notice">No Credit Card Required</p>
      </div>
      <div class="item flex">
        <img src="../assets/images/check_icon.png" alt="" />
        <p class="notice">30 credits on sign up</p>
      </div>
      <div class="item flex">
        <img src="../assets/images/check_icon.png" alt="" />
        <p class="notice">90+ contents type to explore</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../assets/scss/common.scss";
.section {
  margin-bottom: 150px;
  text-align: center;
  &__title {
    margin-bottom: 20px;
  }
  &__subtitle {
    margin-bottom: 33px;
  }
  &__btn {
    margin-bottom: 53px;
    transition: all 0.3s;
  }
  .group--notice {
    justify-content: center;
    .item {
      margin-right: 74px;
      > img {
        margin-right: 15px;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
