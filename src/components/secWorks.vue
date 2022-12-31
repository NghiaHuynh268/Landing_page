<template>
  <div class="section container">
    <h2 class="section__title sec__title">How it works</h2>
    <div class="item flex" v-for="(work, index) in dataWorks" :key="index">
      <img :src="work.img" alt="" />
      <div class="info">
        <div class="info__header flex">
          <p class="number">{{ index + 1 }}</p>
          <p class="name">{{ work.name }}</p>
        </div>
        <div class="info__body">
          <p class="text sec__text">{{ work.text }}</p>
          <div class="option">
            <p v-for="(option, index) in work.options" :key="index" class="opt">
              <img src="../assets/images/icon_check.png" alt="" />
              {{ option }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DATA_WORKS } from "@/resources/data";
export default {
  data() {
    return {
      dataWorks: DATA_WORKS,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/common.scss";
.section {
  margin-bottom: 150px;
  padding: 0 60px;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 600px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, white, transparent);
    pointer-events: none;
  }
  .section__title {
    margin-bottom: 100px;
  }
  .item {
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 30px;
    .info {
      max-width: 500px;
      height: 300px;
      &__header {
        margin-bottom: 18px;
        .number {
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          color: #000000;
          padding: 4px 8px;
          border: 1px solid black;
          margin-right: 29px;
        }
        .name {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: $color--title;
        }
      }
      &__body {
        margin-left: 15px;
        padding-left: 40px;
        height: calc(100% - 27px);
        border-left: 1px dashed #b4b4b4;
        .text {
          font-weight: 600;
          color: $color--title;
          margin-bottom: 43px;
        }
        .option {
          .opt {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: $color--title;
            margin-bottom: 17px;
            > img {
              margin-right: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
