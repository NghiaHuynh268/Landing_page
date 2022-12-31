<template>
  <div class="logo">
    <div class="logo__wrap flex container">
      <img
        class="logo--img"
        v-for="image in dataLogo"
        :key="image.id"
        :src="image.link"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script>
import { DATA_LOGO } from "@/resources/data";
export default {
  data() {
    return {
      dataLogo: DATA_LOGO,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/common.scss";
.logo {
  margin-top: 121px;
  margin-bottom: 158px;
  &__wrap {
    justify-content: space-between;
  }
}
</style>
