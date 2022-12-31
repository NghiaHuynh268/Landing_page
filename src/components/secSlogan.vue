<template>
  <div class="section">
    <div class="section__wrap flex container">
      <p class="section__top">
        Say 'Goodbye' to the blank page <span>For Good</span>
      </p>
      <div class="section__bot">
        <p class="title">Get your free account today</p>
        <div class="group__btn flex">
          <button class="google__btn">
            <img src="../assets/images/icon_gg.png" alt="" />
            signup with google
          </button>
          <p class="or">or</p>
          <button class="email__btn">
            <img src="../assets/images/icon_email.png" alt="" />
            signup with email
          </button>
        </div>
        <p class="notice">No Credit Card Required</p>
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
  position: relative;
  height: 1000px;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    #fee7f9,
    #f5fef8,
    #feebed,
    #a9fffe
  );
  margin-bottom: 150px;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #160647;
    border-radius: 50%;
    position: absolute;
    top: -49%;
    z-index: 0;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #160647;
    border-radius: 50%;
    position: absolute;
    bottom: -49%;
    z-index: 0;
  }
  &__wrap {
    height: 100%;
    padding: 128px 0;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
  }
  &__top {
    max-width: 860px;
    font-weight: 700;
    font-size: 64px;
    line-height: 94px;
    text-align: center;
    color: #ffffff;
    span {
      color: #f22e52;
    }
  }
  &__bot {
    .title {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: #ffffff;
      margin-bottom: 31px;
      text-align: center;
    }
    .group__btn {
      margin-bottom: 25px;
      .google__btn {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #160647;
        padding: 14px 24px;
        border-radius: 50px;
        margin-right: 13px;
        transition: all 0.3s;
        > img {
          margin-right: 9px;
        }
      }
      .or {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #7a8994;
        margin-right: 13px;
      }
      .email__btn {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #ffffff;
        padding: 14px 24px;
        border-radius: 50px;
        background-color: #47beba;
        transition: all 0.3s;
        > img {
          margin-right: 9px;
        }
        &:hover {
          background-color: green;
        }
      }
    }
    .notice {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #7a8994;
      text-align: center;
    }
  }
}
</style>
