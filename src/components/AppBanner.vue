<template>
  <div class="banner">
    <div class="banner--wrap container">
      <h1 class="banner__title">
        Silika Helps <br />
        Marketing Agencies!
      </h1>
      <p class="banner__describe">
        At nulla tristique facilisis augue. Lectus diam dignissim erat blandit
        pellentesque egestas nulla a. Nulla consectetur nunc egestas metus
        pellentesque.
      </p>
      <div class="banner__button">
        <button class="banner__button--start button--start">Get Started</button>
        <button class="banner__button--how">How It Works</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/scss/common.scss";
.banner {
  padding: 200px 0;
  background-image: linear-gradient(
    to top right,
    #78bfd4,
    #a0c8d0,
    #fcdacc,
    #fee9de
  );
  &--wrap {
    text-align: center;
  }
  &__title {
    font-weight: 700;
    font-size: 64px;
    letter-spacing: 0.02em;
    color: $color--title;
    margin-bottom: 29px;
  }
  &__describe {
    max-width: 700px;
    margin: auto;
    font-weight: 400;
    font-size: 16px;
    color: $color--text;
    margin-bottom: 41px;
  }
  &__button {
    &--start {
      margin-right: 20px;
    }
    &--how {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.02em;
      color: $color--base;
      padding: 15px 30px;
      background-color: $color--red;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
    }
  }
}
</style>
