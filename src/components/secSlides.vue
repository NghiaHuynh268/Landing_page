<template>
  <div class="section container">
    <h2 class="section__title">
      Let's See What Our <br />
      Clients Says
    </h2>
    <carousel :navigationEnabled="true" :perPage="1">
      <slide v-for="(slide, index) in dataSlides" :key="index">
        <div class="section__item flex">
          <img :src="slide.img" alt="" />
          <div class="info">
            <p class="name">{{ slide.name }}</p>
            <p class="job">{{ slide.job }}</p>
          </div>
          <p class="text sec__text">
            {{ slide.describe }}
          </p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { DATA_SLIDES } from "@/resources/data";
import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      dataSlides: DATA_SLIDES,
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/common.scss";
.section {
  margin-bottom: 150px;
  &__title {
    text-align: center;
    font-weight: 800;
    font-size: 48px;
    line-height: 63px;
    color: $color--title;
    margin-bottom: 100px;
  }
  .left,
  .right {
    background-color: transparent;
    transition: all 0.3s;
    &:hover {
      scale: 1.1;
    }
  }
  &__slide {
    justify-content: space-around;
  }
  &__item {
    padding: 52px 30px;
    width: 400px;
    flex-wrap: wrap;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    margin: auto;
    > img {
      margin-right: 16px;
      margin-bottom: 24px;
    }
    .info {
      margin-bottom: 24px;
      .name {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: $color--title;
        margin-bottom: 6px;
      }
      .job {
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: $color--text;
      }
    }
  }
}
</style>
