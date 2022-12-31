<template>
  <footer class="footer">
    <div class="footer__wrap flex container">
      <div class="group" v-for="(item, index) in dataFooter" :key="index">
        <p class="options">{{ item.name }}</p>
        <a
          href="#"
          class="option"
          v-for="(option, index) in item.options"
          :key="index"
          >{{ option }}</a
        >
      </div>
      <div class="moreinfo flex">
        <div class="left flex">
          <p class="brand">Silika.ai</p>
          <p class="Inc">© 2022 copy ai, Inc</p>
          <a href="#" class="notice">Privacy Notice</a>
          <a href="#" class="terms">Terms of service</a>
        </div>
        <div class="right flex">
          <a
            v-for="(contact, index) in dataContacts"
            :key="index"
            :href="contact.link"
            :class="contact.name"
          >
            <img :src="contact.img" alt=""
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { DATA_CONTACTS, DATA_FOOTER } from "@/resources/data";
export default {
  data() {
    return {
      dataFooter: DATA_FOOTER,
      dataContacts: DATA_CONTACTS,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
.footer {
  padding: 145px 0;
  background-color: #160647;
  &__wrap {
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    .group {
      margin-bottom: 55px;
      .options {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.02em;
        color: #ffffff;
        margin-bottom: 27px;
      }
      .option {
        display: block;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #ffffff;
        margin-bottom: 13px;
        transition: all 0.3s;
        &:hover {
          color: lightgreen;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    .moreinfo {
      width: 100%;
      justify-content: space-between;
      .left {
        .brand {
          font-weight: 700;
          font-size: 20px;
          line-height: 35px;
          color: #ffffff;
          margin-right: 20px;
        }
        .Inc,
        .notice,
        .terms {
          font-weight: 700;
          font-size: 10px;
          line-height: 18px;
          color: #ffffff;
          margin-right: 26px;
          transition: all 0.3s;
        }
        .notice,
        .terms {
          &:hover {
            color: lightgreen;
          }
        }
      }
      .right {
        .facebook,
        .instagram,
        .twitter {
          margin-right: 14px;
          padding: 5px;
          border-radius: 50%;
          transition: all 0.3s;
          &:hover {
            background-color: lightgreen;
          }
        }
        .twitter {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
