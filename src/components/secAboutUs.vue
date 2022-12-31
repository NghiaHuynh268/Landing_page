<template>
  <div class="section container">
    <h2 class="section__title sec__title">More About Us</h2>
    <div class="section__wrap flex">
      <div class="section__info">
        <p class="info__name">professional & team choose copy.ai</p>
        <p class="info__text text">
          Odio dictum lacus augue nulla sit integer facilisis massa. Nec et
          tellus eu amet. Faucibus sit sit massa ullamcorper
        </p>
        <button class="info__button button--start">Get Started</button>
      </div>
      <div class="section__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t4zTeFeP79Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
  &__title {
    margin-bottom: 100px;
  }
  &__wrap {
    justify-content: space-between;
  }
  &__info {
    max-width: 441px;
    .info__name {
      font-weight: 600;
      font-size: 40px;
      line-height: 132.5%;
      letter-spacing: 0.02em;
      color: $color__section--title;
      margin-bottom: 23px;
    }
    .info__text {
      max-width: 383px;
      margin-bottom: 27px;
    }
  }
  &__video {
    iframe {
      width: 712px;
    }
  }
}
</style>
